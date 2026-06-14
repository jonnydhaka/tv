<?php
// Streams HTTP video sources through your HTTPS origin to avoid mixed-content blocks.
// Usage: stream-proxy.php?u=<remote m3u8/segment url>

header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-store');

$remote = isset($_GET['u']) ? $_GET['u'] : '';
if ($remote === '' || !filter_var($remote, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    exit('Invalid URL');
}

$parsed = parse_url($remote);
$scheme = isset($parsed['scheme']) ? strtolower($parsed['scheme']) : '';
// Only proxy http/https
if ($scheme !== 'http' && $scheme !== 'https') {
    http_response_code(400);
    exit('Bad scheme');
}

// fetch remote content
$ctx = stream_context_create([
    'http' => [
        'method'        => 'GET',
        'timeout'       => 15,
        'user_agent'    => 'Mozilla/5.0 (LivetvProxy)',
        'ignore_errors' => true,
        'header'        => "Accept: */*\r\n",
    ],
]);

$content = @file_get_contents($remote, false, $ctx);

// capture response headers
foreach ($http_response_header as $h) {
    if (preg_match('/^content-type:\s*(.+)$/i', $h, $m)) {
        header('Content-Type: ' . trim($m[1]));
    }
}

if ($content === false) {
    http_response_code(502);
    exit('Upstream error');
}

// If this is a playlist, rewrite relative/segment URLs to go through this proxy
$isPlaylist = false;
foreach ($http_response_header as $h) {
    if (preg_match('/^content-type:\s*(application\/vnd\.apple\.mpegurl|audio\/mpegurl|application\/x-mpegURL)/i', $h)) {
        $isPlaylist = true;
        break;
    }
}
if (!$isPlaylist) {
    // also detect by extension
    $ext = strtolower(pathinfo($parsed['path'], PATHINFO_EXTENSION));
    if ($ext === 'm3u8' || $ext === 'm3u') {
        $isPlaylist = true;
    }
}

if ($isPlaylist) {
    header('Content-Type: application/vnd.apple.mpegurl');
    $base = $remote;
    $lines = explode("\n", $content);
    $self = strtok($_SERVER['REQUEST_URI'], '?');
    $out = [];
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') {
            // rewrite URI= inside #EXT-X-KEY / #EXT-X-MAP etc.
            if (preg_match('/^(#EXT-X-KEY|#EXT-X-MAP)(.*URI=")([^"]+)(".*)$/', $line, $m)) {
                $abs = rel2abs($m[3], $base);
                $line = $m[1] . $m[2] . $self . '?u=' . rawurlencode($abs) . $m[4];
            }
            $out[] = $line;
            continue;
        }
        $abs = rel2abs($line, $base);
        $out[] = $self . '?u=' . rawurlencode($abs);
    }
    echo implode("\n", $out);
} else {
    // segment / media - just pass through
    echo $content;
}
exit;

function rel2abs($rel, $base) {
    if (preg_match('#^https?://#i', $rel)) {
        return $rel;
    }
    $bp = parse_url($base);
    $scheme = $bp['scheme'];
    $host = $bp['host'];
    if (isset($bp['port'])) $host .= ':' . $bp['port'];
    $path = isset($bp['path']) ? $bp['path'] : '/';
    if ($rel[0] === '/') {
        return $scheme . '://' . $host . $rel;
    }
    // strip filename
    $dir = preg_replace('#/[^/]*$#', '/', $path);
    // handle ../ and ./
    $parts = explode('/', $dir . $rel);
    $stack = [];
    foreach ($parts as $part) {
        if ($part === '' || $part === '.') continue;
        if ($part === '..') { array_pop($stack); continue; }
        $stack[] = $part;
    }
    return $scheme . '://' . $host . '/' . implode('/', $stack);
}

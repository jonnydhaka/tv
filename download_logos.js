#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const livetvDir = __dirname;
const channelsPath = path.join(livetvDir, 'channels.js');
const imagesDir = path.join(livetvDir, 'images');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

const channels = require(channelsPath);

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const proto = url.startsWith('https') ? https : http;
        const req = proto.get(url, { timeout: 20000 }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return resolve(download(res.headers.location, dest));
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => file.close(() => resolve(dest)));
            file.on('error', reject);
        });
        req.on('error', reject);
        req.on('timeout', () => req.destroy(new Error('timeout')));
    });
}

function slug(name) {
    return name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\([^)]*\)/g, '')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function extFromUrl(url) {
    try {
        const u = new URL(url);
        const m = u.pathname.match(/\.(png|jpe?g|svg|gif|webp)$/i);
        if (m) return m[1].toLowerCase();
    } catch (e) {}
    return 'png';
}

async function main() {
    let fileContent = fs.readFileSync(channelsPath, 'utf8');
    const used = new Set();
    const failed = [];

    for (const ch of channels) {
        const origLogo = ch.logo;
        const ext = extFromUrl(origLogo);
        let base = `${ch.id}-${slug(ch.name)}`.slice(0, 60);
        if (!base) base = `ch-${ch.id}`;
        let filename = `${base}.${ext}`;
        let n = 1;
        while (used.has(filename)) filename = `${base}-${n++}.${ext}`;
        used.add(filename);
        const dest = path.join(imagesDir, filename);

        let ok = true;
        if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
            console.log(`skip (exists): ${filename}`);
        } else {
            try {
                console.log(`downloading [${ch.id}] ${ch.name}: ${origLogo}`);
                await download(origLogo, dest);
                console.log(`  ok (${fs.statSync(dest).size} bytes) -> ${filename}`);
            } catch (e) {
                console.error(`  FAIL [${ch.id} ${ch.name}]: ${e.message}`);
                if (fs.existsSync(dest) && fs.statSync(dest).size === 0) fs.unlinkSync(dest);
                failed.push({ id: ch.id, name: ch.name, logo: origLogo, error: e.message });
                ok = false;
            }
        }

        if (ok) {
            const newLogo = `images/${filename}`;
            // Escape regex special chars in the original logo URL
            const escaped = origLogo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(`("logo":\\s*)"${escaped}"`, 'g');
            fileContent = fileContent.replace(re, `$1"${newLogo}"`);
        }
    }

    fs.writeFileSync(channelsPath, fileContent, 'utf8');
    console.log('\nchannels.js updated.');

    if (failed.length) {
        console.log(`\n${failed.length} logo(s) FAILED (kept remote url):`);
        for (const f of failed) console.log(`  [${f.id}] ${f.name}: ${f.error}`);
    }
}

main().catch(e => { console.error(e); process.exit(1); });

<?php
$channelCount = 110;
$categories = ['All', 'Favorites', 'Sports', 'News', 'Entertainment', 'Kids', 'Islamic'];
$siteName = 'Live TV';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Live TV - HD live streaming portal with 110+ channels including sports, news, entertainment, kids, and Islamic channels.">
    <title><?= htmlspecialchars($siteName) ?> | Live Streaming</title>

    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="ambient-glow-backdrop" id="ambientBackdrop"></div>

    <header class="app-header">
        <div class="header-brand">
            <div class="brand-details">
                <span class="brand-title"><?= htmlspecialchars($siteName) ?></span>
                <span class="brand-badge">PREMIUM IPTV</span>
            </div>
        </div>

        <div class="header-meta">
            <div id="liveClock" class="live-clock">--:--:--</div>
            <div class="status-indicator">
                <span class="status-dot online"></span>
                <span class="status-text">NETWORK SECURE</span>
            </div>
        </div>

        <div class="header-actions">
            <button class="action-btn" id="dimLightsBtn" onclick="toggleTheaterMode()" title="Theater Mode (T)">
                <svg viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.16 5.1a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06L6.16 6.16a.75.75 0 010-1.06zm11.68 0a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM12 9a3 3 0 100 6 3 3 0 000-6zm-8.25 3.75a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm13.5 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zm-5.84-1.59a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zm11.68 0a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0z"></path></svg>
            </button>
            <button class="action-btn" onclick="shareStream()" title="Share Stream">
                <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>
            </button>
            <button class="action-btn info-trigger" id="infoBtn" onclick="toggleHelpModal()" title="View Shortcuts (?)">
                <span style="font-weight:800;font-family:'Outfit',sans-serif;font-size:0.95rem;">?</span>
            </button>
        </div>
    </header>

    <main class="app-viewport">
        <section class="player-stage">
            <div class="video-window-outer glowing" id="playerOuterStage">
                <canvas id="ambientCanvas" class="ambient-glow-canvas" width="24" height="14"></canvas>

                <div class="video-window show-controls" id="videoContainer">
                    <video id="videoPlayer" preload="metadata" playsinline webkit-playsinline muted crossorigin="anonymous"></video>

                    <div id="audioUnmuteOverlay" class="unmute-overlay" style="display:none;">
                        <div class="unmute-box">
                            <span class="unmute-icon">&#128266;</span>
                            <button id="unmuteActionBtn" class="unmute-btn" onclick="unlockAudioStream()">UNMUTE STREAM</button>
                            <p class="unmute-subtext">Click or press ENTER to activate sound</p>
                        </div>
                    </div>

                    <div id="videoBufferOverlay" class="buffer-overlay" style="display:none;">
                        <div class="neon-spinner"></div>
                        <span class="buffer-text">BUFFERING STREAM</span>
                    </div>

                    <div id="playFlashOverlay" class="play-flash-overlay">
                        <div class="flash-circle">
                            <svg id="flashIconPlay" viewBox="0 0 24 24"><path d="M8 5.14v14l11-7-11-7z"></path></svg>
                            <svg id="flashIconPause" viewBox="0 0 24 24" style="display:none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                        </div>
                    </div>

                    <div class="player-controls-overlay">
                        <div class="player-control-row">
                            <button class="ctrl-btn" id="playPauseBtn" onclick="togglePlaybackState()" title="Play/Pause (Space)">
                                <svg id="playIcon" viewBox="0 0 24 24" style="display:none;"><path d="M8 5.14v14l11-7-11-7z"></path></svg>
                                <svg id="pauseIcon" viewBox="0 0 24 24" style="display:block;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                            </button>

                            <div class="volume-slider-group">
                                <button class="ctrl-btn" id="muteToggleBtn" onclick="toggleVolumeMute()" title="Mute/Unmute (M)">
                                    <svg id="volumeOnIcon" viewBox="0 0 24 24" style="display:block;"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>
                                    <svg id="volumeMutedIcon" viewBox="0 0 24 24" style="display:none;"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>
                                </button>
                                <input type="range" class="volume-slider" id="volumeBar" min="0" max="1" step="0.05" value="1" oninput="adjustVolume(this.value)">
                            </div>

                            <div class="quality-selector-group">
                                <label class="quality-label" for="qualitySelect">Quality</label>
                                <select id="qualitySelect" class="quality-select" onchange="changeStreamQuality(this.value)">
                                    <option value="auto">Auto</option>
                                </select>
                            </div>

                            <div class="channel-info-display">
                                <span class="badge-live">LIVE</span>
                                <span class="active-channel-name" id="selectedChannelName">Loading...</span>
                            </div>

                            <div class="stage-actions">
                                <button class="ctrl-btn stage-action-btn" onclick="togglePipMode()" title="Picture-in-Picture" data-label="Mini">
                                    <svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></svg>
                                </button>
                                <button class="ctrl-btn stage-action-btn active" onclick="toggleAmbientLighting()" id="ambientGlowBtn" title="Toggle Ambilight" data-label="Glow">
                                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
                                </button>
                                <button class="ctrl-btn stage-action-btn" onclick="requestStageFullscreen()" title="Fullscreen (F)" data-label="Full">
                                    <svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="active-metadata-panel">
                <div class="metadata-meta">
                    <img id="metaChannelLogo" class="meta-logo" src="" alt="">
                    <div>
                        <h2 class="meta-title" id="metaChannelTitle">Loading...</h2>
                        <div class="meta-tags">
                            <span class="tag-badge" id="metaChannelCategory">--</span>
                            <span class="tag-badge glow-red">HLS Stream</span>
                        </div>
                    </div>
                </div>
                <div class="metadata-epg">
                    <div class="epg-progress-container">
                        <div class="epg-label">
                            <span id="metaEpgShowTitle">CURRENT SHOW: <b>Loading...</b></span>
                            <span class="epg-time" id="epgTimeRange">--:-- - --:--</span>
                        </div>
                        <div class="epg-bar">
                            <div class="epg-fill" id="epgProgressFill" style="width:50%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <aside class="dashboard-sidebar">
            <div class="sidebar-shell">
                <div class="sidebar-panel-head">
                    <div>
                        <span class="sidebar-eyebrow">Channel Browser</span>
                        <h2 class="sidebar-heading">Find your next stream</h2>
                    </div>
                    <div class="sidebar-mini-badge">LIVE TV</div>
                </div>

                <div class="sidebar-search">
                    <div class="search-box">
                        <span class="search-icon">&#128269;</span>
                        <input type="text" id="channelSearch" placeholder="Search <?= $channelCount ?>+ channels... (Press /)" oninput="handleSearchFilter()">
                        <button class="clear-search-btn" id="clearSearchBtn" onclick="clearSearchField()" style="display:none;">&#10005;</button>
                    </div>
                </div>

                <nav class="category-tabs" id="categoryNav">
                    <?php foreach ($categories as $cat): ?>
                        <button class="tab-item<?= $cat === 'All' ? ' active' : '' ?><?= $cat === 'Favorites' ? ' favs-tab' : '' ?>" onclick="switchCategory('<?= $cat === 'Favorites' ? 'Favorites' : $cat ?>')">
                            <?= $cat === 'Favorites' ? '<span class="star-icon">&#9733;</span> ' : '' ?><?= htmlspecialchars($cat) ?>
                        </button>
                    <?php endforeach; ?>
                </nav>

                <div class="sidebar-title-bar">
                    <span id="channelCountDisplay">All channels (<?= $channelCount ?>)</span>
                </div>

                <div class="channel-card-list" id="channelGrid"></div>
            </div>
        </aside>
    </main>

    <div class="modal-overlay" id="helpModal" style="display:none;" onclick="closeHelpModalOutside(event)">
        <div class="modal-card">
            <div class="modal-header">
                <h3>Keyboard Shortcuts</h3>
                <button class="close-modal-btn" onclick="toggleHelpModal()">&#10005;</button>
            </div>
            <div class="modal-body">
                <div class="shortcut-item"><span class="key">Spacebar</span><span>Play / Pause</span></div>
                <div class="shortcut-item"><span class="key">Arrow Up</span><span>Previous channel</span></div>
                <div class="shortcut-item"><span class="key">Arrow Down</span><span>Next channel</span></div>
                <div class="shortcut-item"><span class="key">F</span><span>Fullscreen</span></div>
                <div class="shortcut-item"><span class="key">M</span><span>Mute / Unmute</span></div>
                <div class="shortcut-item"><span class="key">T</span><span>Theater mode</span></div>
                <div class="shortcut-item"><span class="key">S / /</span><span>Focus search</span></div>
                <div class="shortcut-item"><span class="key">1-9</span><span>Quick channel select</span></div>
            </div>
        </div>
    </div>

    <footer class="app-footer">
        <div class="footer-copy"><?= htmlspecialchars($siteName) ?> | Live Streaming Portal. Powered by PHP &amp; HLS.js</div>
        <div class="visitor-dashboard">
            <span class="pulse-ring"></span>
            <span class="stats-text" id="statsViewerCount"><?= $channelCount ?> streams indexed</span>
        </div>
    </footer>

    <script src="channels.js"></script>
    <script src="app.js"></script>
</body>
</html>

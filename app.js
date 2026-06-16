/* ==========================================
   Live TV - Application Controller
   ========================================== */

(function () {
    'use strict';

    // ── State ──────────────────────────────────────────────
    const state = {
        hls: null,
        currentChannelIndex: 0,
        favorites: [],
        activeCategory: 'All',
        searchQuery: '',
        ambientGlowOn: true,
        theaterMode: false,
        ambientTimer: null,
        quality: 'auto',
        nativeFallbackAttempted: false,
        audioUnlocked: false,
        controlsTimer: null,
        filteredChannels: [],
        bufferShowTimer: null
    };

    // ── DOM References ─────────────────────────────────────
    const dom = {
        video:              document.getElementById('videoPlayer'),
        videoWrap:          document.getElementById('videoContainer'),
        playerStage:        document.getElementById('playerOuterStage'),
        unmuteOverlay:      document.getElementById('audioUnmuteOverlay'),
        bufferOverlay:      document.getElementById('videoBufferOverlay'),
        flashOverlay:       document.getElementById('playFlashOverlay'),
        flashPlay:          document.getElementById('flashIconPlay'),
        flashPause:         document.getElementById('flashIconPause'),

        channelName:        document.getElementById('selectedChannelName'),
        channelGrid:        document.getElementById('channelGrid'),
        searchInput:        document.getElementById('channelSearch'),
        clearSearchBtn:     document.getElementById('clearSearchBtn'),
        categoryNav:        document.getElementById('categoryNav'),
        channelCount:       document.getElementById('channelCountDisplay'),
        clock:              document.getElementById('liveClock'),

        metaLogo:           document.getElementById('metaChannelLogo'),
        metaTitle:          document.getElementById('metaChannelTitle'),
        metaCategory:       document.getElementById('metaChannelCategory'),
        epgShowTitle:       document.getElementById('metaEpgShowTitle'),
        epgProgress:        document.getElementById('epgProgressFill'),
        epgTimeRange:       document.getElementById('epgTimeRange'),

        playPauseBtn:       document.getElementById('playPauseBtn'),
        playIcon:           document.getElementById('playIcon'),
        pauseIcon:          document.getElementById('pauseIcon'),
        muteBtn:            document.getElementById('muteToggleBtn'),
        volOnIcon:          document.getElementById('volumeOnIcon'),
        volMutedIcon:       document.getElementById('volumeMutedIcon'),
        volumeSlider:       document.getElementById('volumeBar'),
        qualitySelect:      document.getElementById('qualitySelect'),

        ambientBackdrop:    document.getElementById('ambientBackdrop'),
        ambientCanvas:      document.getElementById('ambientCanvas'),
        helpModal:          document.getElementById('helpModal'),
        ambientGlowBtn:     document.getElementById('ambientGlowBtn')
    };

    // ── Helpers ────────────────────────────────────────────
    function isIOS() {
        return /iPad|iPhone|iPod|Macintosh/i.test(navigator.userAgent);
    }

    function isAndroid() {
        return /Android/i.test(navigator.userAgent);
    }

    function nativeHlsSupported() {
        return typeof dom.video.canPlayType === 'function' &&
               dom.video.canPlayType('application/vnd.apple.mpegurl') !== '';
    }

    function formatLevelLabel(level, idx) {
        if (level.height)  return level.height + 'p';
        if (level.bitrate) return Math.round(level.bitrate / 1000) + ' kbps';
        return 'Level ' + (idx + 1);
    }

    function avatarUrl(name) {
        return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) +
               '&background=0D1117&color=00B4D8&bold=true';
    }

    // ── Initialization ─────────────────────────────────────
    window.addEventListener('DOMContentLoaded', function () {
        dom.video.playsInline = true;
        dom.video.setAttribute('playsinline', '');
        dom.video.setAttribute('webkit-playsinline', '');

        loadFavorites();
        startClock();
        bindPlayerControls();

        if (typeof channels === 'undefined' || !Array.isArray(channels)) {
            dom.channelCount.textContent = 'Error: channel database not found';
            return;
        }

        state.filteredChannels = channels.slice();
        renderChannelList();

        var params = new URLSearchParams(window.location.search);
        var startId = parseInt(params.get('ch'), 10);
        var startIdx = 0;
        if (startId) {
            var found = channels.findIndex(function (c) { return c.id === startId; });
            if (found !== -1) startIdx = found;
        }
        playChannel(startIdx);
    });

    // ── Clock & EPG ────────────────────────────────────────
    function startClock() {
        function tick() {
            dom.clock.textContent = new Date().toLocaleTimeString([], {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
        }
        tick();
        setInterval(tick, 1000);

        function updateEpgTime() {
            var now = new Date();
            var start = new Date(now);
            start.setMinutes(0, 0, 0);
            var end = new Date(start.getTime() + 3600000);
            var fmt = function (d) { return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); };
            dom.epgTimeRange.textContent = fmt(start) + ' - ' + fmt(end);
        }
        updateEpgTime();
        setInterval(updateEpgTime, 60000);
    }

    function updateMockEpg(name, category) {
        var db = {
            Sports:        ['Live Football: World Cup Qualifiers', 'Super Sunday: Premier League', 'Cricket Live: T20 Internationals', 'Sports Center: Highlights', 'Extreme Sports: Red Bull Diaries'],
            News:          ['Prime Time News Bulletin', 'World Report: International Desk', 'Business Hour: Market Updates', 'Midnight Headlines: Global Focus', 'Special Report: Documentary'],
            Kids:          ['Morning Fun: Animated Classics', 'Doraemon Marathon Hour', 'Disney Adventure Land', 'Cartoon Fiesta: Fun & Games', 'Gopal Bhar: Funny Stories'],
            Islamic:       ['Peace in Islam: Quranic Recitation', 'Madani Live Prayer Broadcast', 'Understanding Sunnah: Lectures', 'Hajj Pilgrimage Live Coverage', 'Islamic Q&A Live Session'],
            Entertainment: ['Mega Drama: Evening Serial', 'Movie Time: Hollywood Hits', 'Travel Chronicles: Global Journey', 'Music Express: Top 40 Hits', 'Classic Talk Show: Celeb Interviews']
        };
        var shows = db[category] || db.Entertainment;
        var hour = new Date().getHours();
        var idx = (name.length + hour) % shows.length;

        dom.epgShowTitle.innerHTML = 'CURRENT SHOW: <b>' + shows[idx] + '</b>';

        var mins = new Date().getMinutes();
        var pct = Math.max(15, Math.min(95, ((mins + name.length) % 60) / 60 * 100));
        dom.epgProgress.style.width = pct + '%';
    }

    // ── Favorites ──────────────────────────────────────────
    function loadFavorites() {
        try {
            var stored = localStorage.getItem('livetv_favorites');
            if (stored) state.favorites = JSON.parse(stored);
        } catch (_) {
            state.favorites = [];
        }
    }

    function saveFavorites() {
        try {
            localStorage.setItem('livetv_favorites', JSON.stringify(state.favorites));
        } catch (_) {}
    }

    function toggleFavorite(id, evt) {
        if (evt) evt.stopPropagation();

        var pos = state.favorites.indexOf(id);
        if (pos === -1) {
            state.favorites.push(id);
        } else {
            state.favorites.splice(pos, 1);
        }
        saveFavorites();

        document.querySelectorAll('.star-btn[data-id="' + id + '"]').forEach(function (btn) {
            var liked = state.favorites.indexOf(id) !== -1;
            btn.classList.toggle('active', liked);
            btn.textContent = liked ? '\u2605' : '+';
        });

        if (state.activeCategory === 'Favorites') applyFilters();
    }

    // ── Category & Search ──────────────────────────────────
    window.switchCategory = function (name) {
        state.activeCategory = name;

        dom.categoryNav.querySelectorAll('.tab-item').forEach(function (btn) {
            var match = btn.textContent.indexOf(name) !== -1 ||
                        (name === 'Favorites' && btn.textContent.indexOf('Favorites') !== -1);
            btn.classList.toggle('active', match);
        });

        applyFilters();
    };

    window.handleSearchFilter = function () {
        state.searchQuery = dom.searchInput.value.toLowerCase().trim();
        dom.clearSearchBtn.style.display = state.searchQuery.length > 0 ? 'block' : 'none';
        applyFilters();
    };

    window.clearSearchField = function () {
        dom.searchInput.value = '';
        state.searchQuery = '';
        dom.clearSearchBtn.style.display = 'none';
        applyFilters();
    };

    function applyFilters() {
        if (typeof channels === 'undefined') return;

        state.filteredChannels = channels.filter(function (ch) {
            if (state.activeCategory === 'Favorites') {
                if (state.favorites.indexOf(ch.id) === -1) return false;
            } else if (state.activeCategory !== 'All') {
                if (ch.category !== state.activeCategory) return false;
            }
            if (state.searchQuery) {
                return ch.name.toLowerCase().indexOf(state.searchQuery) !== -1 ||
                       ch.category.toLowerCase().indexOf(state.searchQuery) !== -1;
            }
            return true;
        });

        renderChannelList();
    }

    // ── Quality Selector ───────────────────────────────────
    function resetQualitySelect() {
        if (!dom.qualitySelect) return;
        dom.qualitySelect.innerHTML = '<option value="auto">Auto</option>';
        dom.qualitySelect.value = 'auto';
        dom.qualitySelect.disabled = true;
    }

    function populateQualitySelect(levels) {
        if (!dom.qualitySelect) return;
        dom.qualitySelect.innerHTML = '<option value="auto">Auto</option>';

        if (!Array.isArray(levels) || levels.length === 0) {
            dom.qualitySelect.disabled = true;
            dom.qualitySelect.value = 'auto';
            return;
        }

        var seen = {};
        levels.forEach(function (level, i) {
            var label = formatLevelLabel(level, i);
            if (seen[label]) return;
            seen[label] = true;

            var opt = document.createElement('option');
            opt.value = String(i);
            opt.textContent = label;
            dom.qualitySelect.appendChild(opt);
        });

        dom.qualitySelect.disabled = false;
        dom.qualitySelect.value = state.quality === 'auto' ? 'auto' : String(state.quality);
        if (!dom.qualitySelect.querySelector('option[value="' + dom.qualitySelect.value + '"]')) {
            state.quality = 'auto';
            dom.qualitySelect.value = 'auto';
        }
    }

    window.changeStreamQuality = function (val) {
        state.quality = val;
        if (!state.hls) return;

        if (val === 'auto') {
            state.hls.currentLevel = -1;
            state.hls.nextLevel = -1;
        } else {
            var lvl = parseInt(val, 10);
            if (!isNaN(lvl)) {
                state.hls.currentLevel = lvl;
                state.hls.nextLevel = lvl;
            }
        }
    };

    // ── Channel List Rendering ─────────────────────────────
    function renderChannelList() {
        dom.channelGrid.innerHTML = '';
        dom.channelCount.textContent = state.activeCategory + ' channels (' + state.filteredChannels.length + ')';

        if (state.filteredChannels.length === 0) {
            var empty = document.createElement('div');
            empty.className = 'channel-empty-state';
            empty.textContent = state.searchQuery
                ? 'No matching channels found.'
                : 'No channels in this category yet.';
            dom.channelGrid.appendChild(empty);
            return;
        }

        state.filteredChannels.forEach(function (ch) {
            var isActive = ch.id === channels[state.currentChannelIndex].id;
            var liked = state.favorites.indexOf(ch.id) !== -1;

            var card = document.createElement('div');
            card.className = 'channel-card' + (isActive ? ' active' : '');
            card.setAttribute('data-id', ch.id);
            card.setAttribute('tabindex', '0');

            card.innerHTML =
                '<div class="card-meta">' +
                    '<img class="card-logo" src="' + ch.logo + '" alt="' + ch.name + '" ' +
                        'onerror="this.src=\'' + avatarUrl(ch.name) + '\'">' +
                    '<div class="card-name">' + ch.name + '</div>' +
                    '<span class="card-num">CH ' + ch.id + '</span>' +
                '</div>' +
                '<button class="star-btn' + (liked ? ' active' : '') + '" data-id="' + ch.id + '" type="button">' +
                    (liked ? '\u2605' : '+') +
                '</button>';

            card.querySelector('.star-btn').addEventListener('click', function (e) {
                toggleFavorite(ch.id, e);
            });

            card.addEventListener('click', function () {
                var gi = channels.findIndex(function (c) { return c.id === ch.id; });
                if (gi !== -1) playChannel(gi);
            });

            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') card.click();
            });

            dom.channelGrid.appendChild(card);
        });

        var active = dom.channelGrid.querySelector('.channel-card.active');
        if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ── HLS Playback Engine ────────────────────────────────
    function playChannel(index) {
        if (index < 0 || index >= channels.length) return;
        state.currentChannelIndex = index;
        var ch = channels[index];

        document.querySelectorAll('.channel-card').forEach(function (c) { c.classList.remove('active'); });
        var card = dom.channelGrid.querySelector('.channel-card[data-id="' + ch.id + '"]');
        if (card) card.classList.add('active');

        dom.channelName.textContent = ch.name;
        dom.metaTitle.textContent = ch.name;
        dom.metaLogo.src = ch.logo;
        dom.metaLogo.onerror = function () { dom.metaLogo.src = avatarUrl(ch.name); };
        dom.metaCategory.textContent = ch.category.toUpperCase();
        updateMockEpg(ch.name, ch.category);

        if (state.hls) {
            state.hls.destroy();
            state.hls = null;
        }
        resetQualitySelect();
        state.nativeFallbackAttempted = false;
        dom.video.pause();
        dom.video.removeAttribute('src');
        dom.video.load();
        dom.video.onloadedmetadata = null;
        dom.video.oncanplay = null;

        dom.bufferOverlay.style.display = 'flex';

        setTimeout(function () {
            if (!dom.video.paused && !dom.video.ended) {
                hideBuffer();
            }
        }, 10000);

        var src = proxiedUrl(ch.url);

        if (typeof Hls !== 'undefined' && Hls.isSupported() && src.indexOf('.m3u8') !== -1) {
            state.hls = new Hls({
                maxBufferLength: 10,
                maxMaxBufferLength: 20,
                enableWorker: true,
                lowLatencyMode: !isAndroid(),
                backBufferLength: 8
            });
            state.hls.loadSource(src);
            state.hls.attachMedia(dom.video);

            state.hls.on(Hls.Events.MANIFEST_PARSED, function () {
                populateQualitySelect(state.hls.levels);
                window.changeStreamQuality(state.quality);
                startPlayback();
            });

            state.hls.on(Hls.Events.ERROR, function (_, data) {
                if (!data.fatal) return;

                if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                    state.hls.startLoad();
                } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                    state.hls.recoverMediaError();
                } else {
                    tryNativeFallback(src);
                }
            });
        } else if (nativeHlsSupported() && src.indexOf('.m3u8') !== -1) {
            loadDirect(src);
        } else {
            loadDirect(src);
        }
    }

    function proxiedUrl(url) {
        if (!url) return url;
        if (url.indexOf('http://') === 0 && window.location.protocol === 'https:') {
            var proxy = (window.location.pathname.replace(/\/[^/]*$/, '/') || '/') + 'stream-proxy.php';
            return proxy + '?u=' + encodeURIComponent(url);
        }
        return url;
    }

    function loadDirect(url) {
        resetQualitySelect();
        dom.video.src = url;
        dom.video.load();
        dom.video.onloadedmetadata = startPlayback;
        dom.video.oncanplay = startPlayback;
    }

    function tryNativeFallback(url) {
        if (state.nativeFallbackAttempted) return;
        state.nativeFallbackAttempted = true;
        if (state.hls) { state.hls.destroy(); state.hls = null; }
        loadDirect(url);
    }

    function startPlayback() {
        dom.unmuteOverlay.style.display = 'none';
        dom.video.muted = false;

        var promise = dom.video.play();
        if (promise === undefined) return;

        promise.then(function () {
            state.audioUnlocked = true;
            showPlayIcon(true);
            hideBuffer();
            dom.volumeSlider.value = dom.video.volume || 1;
            showVolumeIcon(false);
        }).catch(function () {
            dom.video.muted = true;
            showVolumeIcon(true);
            dom.video.play().then(function () {
                showPlayIcon(true);
                hideBuffer();
                dom.volumeSlider.value = 0;
            }).catch(function () {
                showPlayIcon(false);
                hideBuffer();
            });
        });
    }

    window.unlockAudioStream = function () {
        state.audioUnlocked = true;
        dom.video.muted = false;
        dom.video.play().catch(function () {});
        dom.unmuteOverlay.style.display = 'none';
        dom.volumeSlider.value = dom.video.volume || 1;
        showVolumeIcon(false);

        var card = dom.channelGrid.querySelector(
            '.channel-card[data-id="' + channels[state.currentChannelIndex].id + '"]'
        );
        if (card) card.focus();
    };

    // ── Playback Controls ──────────────────────────────────
    window.togglePlaybackState = function () {
        var playing;
        if (dom.video.paused) {
            dom.video.play();
            showPlayIcon(true);
            playing = true;
        } else {
            dom.video.pause();
            showPlayIcon(false);
            playing = false;
        }
        flashPlayPause(playing);
    };

    function showPlayIcon(on) {
        dom.playIcon.style.display  = on ? 'none' : 'block';
        dom.pauseIcon.style.display = on ? 'block' : 'none';
    }

    function flashPlayPause(on) {
        dom.flashPlay.style.display  = on ? 'block' : 'none';
        dom.flashPause.style.display = on ? 'none' : 'block';
        dom.flashOverlay.classList.remove('animate');
        void dom.flashOverlay.offsetWidth;
        dom.flashOverlay.classList.add('animate');
    }

    // ── Volume ─────────────────────────────────────────────
    window.adjustVolume = function (val) {
        dom.video.volume = val;
        if (val == 0) {
            dom.video.muted = true;
            showVolumeIcon(true);
        } else {
            state.audioUnlocked = true;
            dom.video.muted = false;
            showVolumeIcon(false);
        }
    };

    window.toggleVolumeMute = function () {
        if (dom.video.muted) {
            state.audioUnlocked = true;
            dom.video.muted = false;
            dom.volumeSlider.value = dom.video.volume || 1;
            showVolumeIcon(false);
        } else {
            dom.video.muted = true;
            dom.volumeSlider.value = 0;
            showVolumeIcon(true);
        }
    };

    function showVolumeIcon(muted) {
        dom.volOnIcon.style.display    = muted ? 'none' : 'block';
        dom.volMutedIcon.style.display = muted ? 'block' : 'none';
    }

    // ── Fullscreen & PiP ───────────────────────────────────
    window.requestStageFullscreen = function () {
        var fsEl = document.fullscreenElement || document.webkitFullscreenElement;
        if (!fsEl) {
            var el = dom.videoWrap;
            (el.requestFullscreen || el.webkitRequestFullscreen || dom.video.webkitEnterFullscreen).call(el || dom.video);
        } else {
            (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        }
    };

    window.togglePipMode = function () {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (dom.video.requestPictureInPicture) {
            dom.video.requestPictureInPicture();
        } else if (dom.video.webkitSupportsPresentationMode) {
            var next = dom.video.webkitPresentationMode === 'picture-in-picture' ? 'inline' : 'picture-in-picture';
            dom.video.webkitSetPresentationMode(next);
        }
    };

    // ── Theater & Ambient ──────────────────────────────────
    window.toggleTheaterMode = function () {
        state.theaterMode = !state.theaterMode;
        var btn = document.getElementById('dimLightsBtn');
        document.body.classList.toggle('theater-mode', state.theaterMode);
        btn.classList.toggle('active', state.theaterMode);
    };

    window.toggleAmbientLighting = function () {
        state.ambientGlowOn = !state.ambientGlowOn;

        if (state.ambientGlowOn) {
            dom.ambientGlowBtn.classList.remove('active');
            dom.playerStage.classList.add('glowing');
            startAmbientLoop();
        } else {
            dom.ambientGlowBtn.classList.add('active');
            dom.playerStage.classList.remove('glowing');
            stopAmbientLoop();
        }
    };

    function startAmbientLoop() {
        stopAmbientLoop();
        var ctx = dom.ambientCanvas.getContext('2d');

        state.ambientTimer = setInterval(function () {
            if (dom.video.paused || dom.video.ended || !state.ambientGlowOn) return;

            dom.ambientCanvas.width = 24;
            dom.ambientCanvas.height = 14;

            try {
                ctx.drawImage(dom.video, 0, 0, 24, 14);
                var px = ctx.getImageData(0, 0, 5, 5).data;
                var r = 0, g = 0, b = 0, n = 0;
                for (var i = 0; i < px.length; i += 4) {
                    if (px[i] > 8 || px[i + 1] > 8 || px[i + 2] > 8) {
                        r += px[i]; g += px[i + 1]; b += px[i + 2]; n++;
                    }
                }
                if (n > 0) {
                    r = Math.floor(r / n);
                    g = Math.floor(g / n);
                    b = Math.floor(b / n);
                    dom.ambientBackdrop.style.background =
                        'radial-gradient(circle, rgba(' + r + ',' + g + ',' + b + ',0.16) 0%, rgba(' +
                        r + ',' + g + ',' + b + ',0.05) 50%, transparent 100%)';
                }
            } catch (_) {}
        }, 200);
    }

    function stopAmbientLoop() {
        if (state.ambientTimer) {
            clearInterval(state.ambientTimer);
            state.ambientTimer = null;
        }
    }

    // ── Controls Visibility ────────────────────────────────
    function showControls(autoHide) {
        if (!dom.videoWrap) return;
        dom.videoWrap.classList.add('show-controls');

        if (state.controlsTimer) {
            clearTimeout(state.controlsTimer);
            state.controlsTimer = null;
        }

        if (autoHide) {
            state.controlsTimer = setTimeout(function () {
                if (!dom.videoWrap.matches(':focus-within')) {
                    dom.videoWrap.classList.remove('show-controls');
                }
            }, 2000);
        }
    }

    function hideControls() {
        if (!dom.videoWrap) return;
        if (state.controlsTimer) {
            clearTimeout(state.controlsTimer);
            state.controlsTimer = null;
        }
        dom.videoWrap.classList.remove('show-controls');
    }

    // ── Player Event Listeners ─────────────────────────────
    function showBufferDelayed() {
        clearTimeout(state.bufferShowTimer);
        state.bufferShowTimer = setTimeout(function () {
            if (dom.video.paused || dom.video.ended) return;
            dom.bufferOverlay.style.display = 'flex';
        }, 800);
    }

    function hideBuffer() {
        clearTimeout(state.bufferShowTimer);
        dom.bufferOverlay.style.display = 'none';
    }

    dom.video.addEventListener('waiting',   showBufferDelayed);
    dom.video.addEventListener('playing',   function () { hideBuffer(); if (state.ambientGlowOn) startAmbientLoop(); });
    dom.video.addEventListener('seeking',   showBufferDelayed);
    dom.video.addEventListener('seeked',    hideBuffer);
    dom.video.addEventListener('error',     function () { hideBuffer(); showPlayIcon(false); });
    dom.video.addEventListener('pause',     function () { hideBuffer(); stopAmbientLoop(); });
    dom.video.addEventListener('ended',     stopAmbientLoop);
    dom.video.addEventListener('canplay',   hideBuffer);
    dom.video.addEventListener('canplaythrough', hideBuffer);

    dom.video.addEventListener('stalled', function () {
        showBufferDelayed();
        if (state.hls) {
            try { state.hls.startLoad(); } catch (_) {}
        } else {
            dom.video.load();
        }
    });

    // ── Keyboard & Mouse Bindings ──────────────────────────
    function bindPlayerControls() {
        dom.playerStage.classList.add('glowing');
        startAmbientLoop();

        dom.videoWrap.addEventListener('mouseenter', function () { showControls(true); });
        dom.videoWrap.addEventListener('mousemove',  function () { showControls(true); });
        dom.videoWrap.addEventListener('mouseleave', hideControls);
        dom.videoWrap.addEventListener('focusin',    function () { showControls(false); });
        dom.videoWrap.addEventListener('focusout',   function () {
            setTimeout(function () {
                if (!dom.videoWrap.matches(':focus-within')) hideControls();
            }, 0);
        });
        dom.videoWrap.addEventListener('touchstart', function () { showControls(true); }, { passive: true });

        window.addEventListener('keydown', function (e) {
            var key = e.key.toLowerCase();

            if (document.activeElement === dom.searchInput) {
                if (key === 'escape') { dom.searchInput.blur(); e.preventDefault(); }
                return;
            }

            if (e.key === ' ' || e.keyCode === 32) { e.preventDefault(); window.togglePlaybackState(); }
            if (e.key === 'ArrowUp' || e.keyCode === 38)  { e.preventDefault(); navigateList(-1); }
            if (e.key === 'ArrowDown' || e.keyCode === 40) { e.preventDefault(); navigateList(1); }
            if (key === 'f') { e.preventDefault(); window.requestStageFullscreen(); }
            if (key === 'm') { e.preventDefault(); window.toggleVolumeMute(); }
            if (key === 't') { e.preventDefault(); window.toggleTheaterMode(); }
            if (key === 's' || e.key === '/') { e.preventDefault(); dom.searchInput.focus(); }

            if (e.key >= '1' && e.key <= '9') {
                var idx = parseInt(e.key, 10) - 1;
                if (idx < state.filteredChannels.length) {
                    var gi = channels.findIndex(function (c) { return c.id === state.filteredChannels[idx].id; });
                    if (gi !== -1) playChannel(gi);
                }
            }
        });
    }

    function navigateList(dir) {
        if (state.filteredChannels.length === 0) return;

        var activeId = channels[state.currentChannelIndex].id;
        var visIdx = state.filteredChannels.findIndex(function (c) { return c.id === activeId; });
        var next = visIdx === -1 ? 0 : Math.max(0, Math.min(state.filteredChannels.length - 1, visIdx + dir));

        var gi = channels.findIndex(function (c) { return c.id === state.filteredChannels[next].id; });
        if (gi !== -1) playChannel(gi);
    }

    // ── Modal & Share ──────────────────────────────────────
    window.toggleHelpModal = function () {
        dom.helpModal.style.display = dom.helpModal.style.display === 'none' ? 'flex' : 'none';
    };

    window.closeHelpModalOutside = function (e) {
        if (e.target === dom.helpModal) dom.helpModal.style.display = 'none';
    };

    window.shareStream = function () {
        var ch = channels[state.currentChannelIndex];
        var url = window.location.origin + window.location.pathname + '?ch=' + ch.id;

        if (navigator.share) {
            navigator.share({ title: 'Live TV', text: 'Watch ' + ch.name + ' live!', url: url })
                .catch(function () {});
        } else {
            navigator.clipboard.writeText(url).then(function () {
                alert('Link copied:\n' + url);
            }).catch(function () {});
        }
    };

})();

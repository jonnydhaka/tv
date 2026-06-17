// A1 TV Channel Database
// Automatically parsed and categorized

const channels = [
    {
        "id": 1,
        "name": "Somoy TV",
        "logo": "images/1-somoy-tv.png",
        "url": "http://198.195.239.50:8095/somoyTv/index.m3u8",
        //"url": "https://live.thebosstv.com:30443/dwlive/Somoy-TV/chunks.m3u8",
        "category": "News"
    },
    {
        "id": 2,
        "name": "BTV",
        "logo": "images/2-btv.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 3,
        "name": "T Sports",
        "logo": "images/3-t-sports.png",
        "url":  "http://198.195.239.50:8095/tsports/tracks-v1a1/mono.m3u8",
        //"url":  "https://premierleagpl23.akamaized.net/hls/live/2107108/Tapmad-P2s6L_EnG-FiN@L/level_0.m3u8",
        "category": "Sports"
    },
    {
        "id": 4,
        "name": "Channel I",
        "logo": "images/4-channel-i.png",
        "url": "https://tvsen6.aynaott.com/channeli/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 5,
        "name": "NTV",
        "logo": "images/5-ntv.png",
        "url": "https://tvsen5.aynaott.com/xV4jEKf3D9zc/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 6,
        "name": "Bangla Vision",
        "logo": "images/6-bangla-vision.png",
        "url": "https://tvsen5.aynaott.com/banglavision/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 7,
        "name": "RTV",
        "logo": "images/7-rtv.png",
        "url": "https://tvsen5.aynaott.com/RtvHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 8,
        "name": "ATN Bangla",
        "logo": "images/8-atn-bangla.png",
        "url": "https://tvsen5.aynaott.com/atnbangla/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 9,
        "name": "Maasranga TV",
        "logo": "images/9-maasranga-tv.png",
        "url": "https://tvsen5.aynaott.com/maasrangatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 10,
        "name": "Deepto TV",
        "logo": "images/10-deepto-tv.png",
        "url": "https://tvsen5.aynaott.com/DeeptoTVHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 11,
        "name": "Duronto TV",
        "logo": "images/11-duronto-tv.png",
        "url": "https://tvsen5.aynaott.com/durontotv/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 12,
        "name": "ETV",
        "logo": "images/12-etv.png",
        "url": "https://tvsen6.aynaott.com/etv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 13,
        "name": "Somoy News TV",
        "logo": "images/13-somoy-news-tv.png",
        "url": "https://tvsen6.aynaott.com/somoytv/index.m3u8",
        "category": "News"
    },
    {
        "id": 14,
        "name": "T Sports HD",
        "logo": "images/3-t-sports.png",
        "url": "https://tvsen5.aynaott.com/tsports/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 15,
        "name": "Gazi TV",
        "logo": "images/15-gazi-tv.png",
        "url": "https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 16,
        "name": "Desh TV",
        "logo": "images/16-desh-tv.png",
        "url": "https://tvsen6.aynaott.com/deshtv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 17,
        "name": "Boishakhi TV",
        "logo": "images/17-boishakhi-tv.png",
        "url": "https://tvsen6.aynaott.com/boishakhitv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 18,
        "name": "Channel 9",
        "logo": "images/18-channel-9.png",
        "url": "https://tvsen6.aynaott.com/channel9/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 19,
        "name": "Channel 24",
        "logo": "images/19-channel-24.png",
        "url": "https://tvsen6.aynaott.com/channel24/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 20,
        "name": "Asian TV",
        "logo": "images/20-asian-tv.png",
        "url": "https://tvsen6.aynaott.com/asiantv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 21,
        "name": "ATN News",
        "logo": "images/21-atn-news.png",
        "url": "https://tvsen6.aynaott.com/atnnews/index.m3u8",
        "category": "News"
    },
    {
        "id": 22,
        "name": "Independent TV",
        "logo": "images/22-independent-tv.png",
        "url": "https://tvsen6.aynaott.com/independenttv/index.m3u8",
        "category": "News"
    },
    {
        "id": 23,
        "name": "SA TV",
        "logo": "images/23-sa-tv.png",
        "url": "https://tvsen6.aynaott.com/satv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 24,
        "name": "DBC News",
        "logo": "images/24-dbc-news.png",
        "url": "https://tvsen6.aynaott.com/dbcnews/index.m3u8",
        "category": "News"
    },
    {
        "id": 25,
        "name": "Ekhon TV",
        "logo": "images/25-ekhon-tv.png",
        "url": "https://tvsen6.aynaott.com/ekhontv/index.m3u8",
        "category": "News"
    },
    {
        "id": 26,
        "name": "News 24 BD",
        "logo": "images/26-news-24-bd.png",
        "url": "https://tvsen6.aynaott.com/news24/index.m3u8",
        "category": "News"
    },
    {
        "id": 27,
        "name": "Bangla TV",
        "logo": "images/27-bangla-tv.png",
        "url": "https://tvsen6.aynaott.com/banglatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 28,
        "name": "Ekattor TV",
        "logo": "images/28-ekattor-tv.png",
        "url": "https://tvsen6.aynaott.com/ekattorbdtv/index.m3u8",
        "category": "News"
    },
    {
        "id": 29,
        "name": "Jamuna TV",
        "logo": "images/29-jamuna-tv.png",
        "url": "https://tvsen6.aynaott.com/jamunatv/index.m3u8",
        "category": "News"
    },
    {
        "id": 30,
        "name": "Mohona TV",
        "logo": "images/30-mohona-tv.png",
        "url": "https://tvsen6.aynaott.com/mohonatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 31,
        "name": "NEXUS TV",
        "logo": "images/31-nexus-tv.png",
        "url": "https://tvsen6.aynaott.com/nexustv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 32,
        "name": "Bijoy TV",
        "logo": "images/32-bijoy-tv.png",
        "url": "https://tvsen6.aynaott.com/bijoytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 33,
        "name": "Global TV",
        "logo": "images/33-global-tv.png",
        "url": "https://tvsen6.aynaott.com/globaltvhd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 34,
        "name": "My TV",
        "logo": "images/34-my-tv.png",
        "url": "https://tvsen6.aynaott.com/mytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 35,
        "name": "Ananda TV",
        "logo": "images/35-ananda-tv.png",
        "url": "https://tvsen6.aynaott.com/anandatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 36,
        "name": "A sports",
        "logo": "images/36-a-sports.png",
        "url": "https://tvsen7.aynaott.com/asports-bkp/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 37,
        "name": "Jamuna TV Premium",
        "logo": "images/37-jamuna-tv-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 38,
        "name": "DBC News Premium",
        "logo": "images/38-dbc-news-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 39,
        "name": "Independent Premium",
        "logo": "images/39-independent-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 40,
        "name": "Ekattor Premium",
        "logo": "images/40-ekattor-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 41,
        "name": "Channel 24 Premium",
        "logo": "images/41-channel-24-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 42,
        "name": "News 24 Premium",
        "logo": "images/42-news-24-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 43,
        "name": "ATN News Premium",
        "logo": "images/43-atn-news-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 44,
        "name": "Al Jazeera",
        "logo": "images/44-al-jazeera.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 45,
        "name": "Star News",
        "logo": "images/45-star-news.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 46,
        "name": "Deepto Premium",
        "logo": "images/46-deepto-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 47,
        "name": "SATV Premium",
        "logo": "images/47-satv-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 48,
        "name": "Channel 9 Premium",
        "logo": "images/48-channel-9-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 49,
        "name": "Ekhon Premium",
        "logo": "images/49-ekhon-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 50,
        "name": "Channel I Premium",
        "logo": "images/50-channel-i-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 51,
        "name": "ATN Bangla Premium",
        "logo": "images/51-atn-bangla-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 52,
        "name": "Bangla Vision Premium",
        "logo": "images/52-bangla-vision-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 53,
        "name": "NTV Premium",
        "logo": "images/53-ntv-premium.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 54,
        "name": "BTV World",
        "logo": "images/54-btv-world.png",
        "url": "https://tvsen6.aynaott.com/btv_world/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 55,
        "name": "BTV CTG",
        "logo": "images/55-btv-ctg.png",
        "url": "https://tvsen6.aynaott.com/btvctg/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 56,
        "name": "Peace TV Bangla HD",
        "logo": "images/56-peace-tv-bangla-hd.png",
        "url": "https://tvsen7.aynaott.com/PeaceTvBanglaHD/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 57,
        "name": "TIME TV USA",
        "logo": "images/57-time-tv-usa.png",
        "url": "https://tvsen7.aynaott.com/timetv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 58,
        "name": "Channel I (Aynaott)",
        "logo": "images/58-channel-i.png",
        "url": "https://tvsen6.aynaott.com/channeli/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 59,
        "name": "NTV (Aynaott)",
        "logo": "images/59-ntv.png",
        "url": "https://tvsen5.aynaott.com/ntvbd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 60,
        "name": "Bangla Vision (Aynaott)",
        "logo": "images/60-bangla-vision.png",
        "url": "https://tvsen5.aynaott.com/banglavision/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 61,
        "name": "RTV (Aynaott)",
        "logo": "images/61-rtv.png",
        "url": "https://tvsen5.aynaott.com/RtvHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 62,
        "name": "ATN Bangla (Aynaott)",
        "logo": "images/62-atn-bangla.png",
        "url": "https://tvsen5.aynaott.com/atnbangla/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 63,
        "name": "ETV (Aynaott)",
        "logo": "images/63-etv.png",
        "url": "https://tvsen6.aynaott.com/etv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 64,
        "name": "Maasranga TV (Aynaott)",
        "logo": "images/64-maasranga-tv.png",
        "url": "https://tvsen5.aynaott.com/maasrangatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 65,
        "name": "Deepto TV (Aynaott)",
        "logo": "images/65-deepto-tv.png",
        "url": "https://tvsen5.aynaott.com/DeeptoTVHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 66,
        "name": "Gazi TV (Aynaott)",
        "logo": "images/66-gazi-tv.png",
        "url": "https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 67,
        "name": "Desh TV (Aynaott)",
        "logo": "images/67-desh-tv.png",
        "url": "https://tvsen6.aynaott.com/deshtv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 68,
        "name": "Boishakhi TV (Aynaott)",
        "logo": "images/68-boishakhi-tv.png",
        "url": "https://tvsen6.aynaott.com/boishakhitv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 69,
        "name": "Channel 9 (Aynaott)",
        "logo": "images/69-channel-9.png",
        "url": "https://tvsen6.aynaott.com/channel9/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 70,
        "name": "Asian TV (Aynaott)",
        "logo": "images/70-asian-tv.png",
        "url": "https://tvsen6.aynaott.com/asiantv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 71,
        "name": "SA TV (Aynaott)",
        "logo": "images/71-sa-tv.png",
        "url": "https://tvsen6.aynaott.com/satv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 72,
        "name": "Duronto TV (Aynaott)",
        "logo": "images/72-duronto-tv.png",
        "url": "https://tvsen6.aynaott.com/durontotv-live/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 73,
        "name": "Bangla TV (Aynaott)",
        "logo": "images/73-bangla-tv.png",
        "url": "https://tvsen6.aynaott.com/banglatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 74,
        "name": "BTV NATIONAL HD",
        "logo": "images/74-btv-national-hd.png",
        "url": "https://tvsen6.aynaott.com/btvhd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 75,
        "name": "Ananda TV (Aynaott)",
        "logo": "images/75-ananda-tv.png",
        "url": "https://tvsen6.aynaott.com/anandatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 76,
        "name": "My TV (Aynaott)",
        "logo": "images/76-my-tv.png",
        "url": "https://tvsen6.aynaott.com/mytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 77,
        "name": "Global TV (Aynaott)",
        "logo": "images/77-global-tv.png",
        "url": "https://tvsen6.aynaott.com/globaltvhd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 78,
        "name": "Bijoy TV (Aynaott)",
        "logo": "images/78-bijoy-tv.png",
        "url": "https://tvsen6.aynaott.com/bijoytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 79,
        "name": "NEXUS TV (Aynaott)",
        "logo": "images/79-nexus-tv.png",
        "url": "https://tvsen6.aynaott.com/nexustv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 80,
        "name": "Mohona TV (Aynaott)",
        "logo": "images/80-mohona-tv.png",
        "url": "https://tvsen6.aynaott.com/mohonatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 81,
        "name": "Drama 24",
        "logo": "images/81-drama-24.png",
        "url": "https://vods2.aynascope.net/gseriesDrama/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 82,
        "name": "T Sports HD (Aynaott)",
        "logo": "images/82-t-sports-hd.png",
        "url": "https://tvsen7.aynaott.com/tsports-hd/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 83,
        "name": "PTV Sports (Aynaott)",
        "logo": "images/83-ptv-sports.png",
        "url": "https://tvsen5.aynaott.com/PtvSports/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 84,
        "name": "A sports (Aynaott)",
        "logo": "images/84-a-sports.png",
        "url": "https://tvsen6.aynaott.com/asports/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 85,
        "name": "Cricket Gold",
        "logo": "images/85-cricket-gold.png",
        "url": "https://tvsen6.aynaott.com/CricketGold/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 86,
        "name": "Al Jazeera",
        "logo": "images/44-al-jazeera.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 87,
        "name": "Bein Sports",
        "logo": "images/87-bein-sports.png",
        "url": "http://fl1.moveonjoy.com/BEIN_SPORTS/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 88,
        "name": "Bloomberg TV",
        "logo": "images/88-bloomberg-tv.png",
        "url": "https://tvsen6.aynaott.com/bloombergtv/index.m3u8",
        "category": "News"
    },
    {
        "id": 89,
        "name": "Cartoon Network",
        "logo": "images/89-cartoon-network.png",
        "url": "https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 90,
        "name": "Nickelodeon",
        "logo": "images/90-nickelodeon.png",
        "url": "https://tvsen7.aynaott.com/nicklodean/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 91,
        "name": "DW News",
        "logo": "images/91-dw-news.png",
        "url": "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8",
        "category": "News"
    },
    {
        "id": 92,
        "name": "France 24 English",
        "logo": "images/92-france-24-english.png",
        "url": "https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_2300.m3u8",
        "category": "News"
    },
    {
        "id": 93,
        "name": "NDTV English",
        "logo": "images/93-ndtv-english.png",
        "url": "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8",
        "category": "News"
    },
    {
        "id": 94,
        "name": "CNN",
        "logo": "images/94-cnn.png",
        "url": "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
        "category": "News"
    },
    {
        "id": 95,
        "name": "RT News",
        "logo": "images/95-rt-news.png",
        "url": "https://rt-glb.rttv.com/live/rtnews/playlist.m3u8",
        "category": "News"
    },
    {
        "id": 96,
        "name": "PBS Kids",
        "logo": "images/96-pbs-kids.png",
        "url": "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8",
        "category": "Kids"
    },
    {
        "id": 97,
        "name": "Disney Channel",
        "logo": "images/97-disney-channel.png",
        "url": "https://tvsen7.aynaott.com/disney/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 98,
        "name": "HBO",
        "logo": "images/98-hbo.png",
        "url": "https://tvsen5.aynaott.com/hbo/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 99,
        "name": "Discovery Family",
        "logo": "images/99-discovery-family.png",
        "url": "https://tvsen5.aynaott.com/discoveryfamily/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 100,
        "name": "National Geographic",
        "logo": "images/100-national-geographic.png",
        "url": "https://tvsen6.aynaott.com/natgeo/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 101,
        "name": "MTV",
        "logo": "images/101-mtv.png",
        "url": "https://tvsen6.aynaott.com/mtv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 102,
        "name": "Fox News",
        "logo": "images/102-fox-news.png",
        "url": "https://tvsen6.aynaott.com/foxbusiness/index.m3u8",
        "category": "News"
    },
    {
        "id": 103,
        "name": "CNBC",
        "logo": "images/103-cnbc.png",
        "url": "https://tvsen6.aynaott.com/cnbc/index.m3u8",
        "category": "News"
    },
    {
        "id": 104,
        "name": "Travel Channel",
        "logo": "images/104-travel-channel.png",
        "url": "https://tvsen6.aynaott.com/travelxp/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 105,
        "name": "Food Network",
        "logo": "images/105-food-network.png",
        "url": "https://tvsen6.aynaott.com/foodnetwork/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 106,
        "name": "Peace TV Urdu HD",
        "logo": "images/106-peace-tv-urdu-hd.png",
        "url": "https://tvsen6.aynaott.com/PeaceTVUrduHD/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 107,
        "name": "Madani TV",
        "logo": "images/107-madani-tv.png",
        "url": "https://tvsen7.aynaott.com/MadaniTV/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 108,
        "name": "Islam TV",
        "logo": "images/108-islam-tv.png",
        "url": "https://tvsen6.aynaott.com/islam/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 109,
        "name": "Deen TV",
        "logo": "images/109-deen-tv.png",
        "url": "https://tvsen7.aynaott.com/deen/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 110,
        "name": "NewsMax",
        "logo": "images/110-newsmax.png",
        "url": "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8",
        "category": "News"
    },
     {
        "id": 111,
        "name": "Channel One",
        "logo": "images/111-channel-one.svg",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 112,
        "name": "Zibo TV",
        "logo": "images/112-zibo-tv.jpeg",
        "url": "https://fifaexclusive.myziboplay.xyz/Fifa/tracks-v1a1/mono.m3u8?token=fe6Uuugm3xgIm2",
        "category": "Sports"
    },
  {
    "id": 113,
    "name": "STAR SPORTS1",
    "logo": "images/113-star-sports1.png",
    "url": "http://198.195.239.50:8095/starSports1/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 114,
    "name": "STAR SPORTS2",
    "logo": "images/114-star-sports2.png",
    "url": "http://198.195.239.50:8095/starSports2/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 115,
    "name": "STAR SPORTS3",
    "logo": "images/115-star-sports3.png",
    "url": "http://198.195.239.50:8095/starSports3/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 116,
    "name": "STAR SPORTS SELECT1 HD",
    "logo": "images/116-star-sports-select1-hd.png",
    "url": "http://198.195.239.50:8095/starSportsSelect1/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 117,
    "name": "STAR SPORTS SELECT2 HD",
    "logo": "images/117-star-sports-select2-hd.png",
    "url": "http://198.195.239.50:8095/starSportsSelect2/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 118,
    "name": "SONY SPORTS1 HD",
    "logo": "images/118-sony-sports1-hd.png",
    "url": "http://198.195.239.50:8095/sonyTenSports1/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 119,
    "name": "SONY SPORTS2 HD",
    "logo": "images/119-sony-sports2-hd.png",
    "url": "http://198.195.239.50:8095/sonyTenSports2/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 120,
    "name": "SONY SPORTS3 HD",
    "logo": "images/120-sony-sports3-hd.png",
    "url": "http://198.195.239.50:8095/sonyTenSports3/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 121,
    "name": "SONY SPORTS4 HD",
    "logo": "images/121-sony-sports4-hd.png",
    "url": "http://198.195.239.50:8095/sonyTenSports4/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 122,
    "name": "SONY SPORTS5 HD",
    "logo": "images/122-sony-sports5-hd.png",
    "url": "http://198.195.239.50:8095/sonyTenSports5/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 123,
    "name": "EURO SPORTS HD",
    "logo": "images/123-euro-sports-hd.png",
    "url": "http://198.195.239.50:8095/euroSports/index.m3u8",
    "category": "Sports"
  },
  {
    "id": 124,
    "name": "STAR JALSHA HD",
    "logo": "images/124-star-jalsha-hd.png",
    "url": "http://198.195.239.50:8095/starJalsha/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 125,
    "name": "JALSHA MOVIES HD",
    "logo": "images/125-jalsha-movies-hd.png",
    "url": "http://198.195.239.50:8095/jalshaMovies/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 126,
    "name": "ZEE BANGLA HD",
    "logo": "images/126-zee-bangla-hd.png",
    "url": "http://198.195.239.50:8095/zeeBangla/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 127,
    "name": "ZEE BANGLA CHINEMA HD",
    "logo": "images/127-zee-bangla-chinema-hd.png",
    "url": "http://198.195.239.50:8095/zeeBanglaCinema/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 128,
    "name": "COLORS BANGLA HD",
    "logo": "images/128-colors-bangla-hd.png",
    "url": "http://198.195.239.50:8095/colorsBangla/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 129,
    "name": "COLORS BANGLA CINEMA HD",
    "logo": "images/129-colors-bangla-cinema-hd.png",
    "url": "http://198.195.239.50:8095/colorsBanglaChinema/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 130,
    "name": "SONY AATH",
    "logo": "images/130-sony-aath.png",
    "url": "http://198.195.239.50:8095/sonyAath/index.m3u8",
    "category": "Indian Bangla"
  },
  {
    "id": 131,
    "name": "SANGEET BANGLA",
    "logo": "images/131-sangeet-bangla.png",
    "url": "http://198.195.239.50:8095/sangeetBangla/index.m3u8",
    "category": "Music"
  },
  {
    "id": 132,
    "name": "SONY MAX HD",
    "logo": "images/132-sony-max-hd.png",
    "url": "http://198.195.239.50:8095/sonyMax/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 133,
    "name": "SONY ENTERTAINMENT HD",
    "logo": "images/133-sony-entertainment-hd.png",
    "url": "http://198.195.239.50:8095/sonyEntertainment/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 134,
    "name": "STAR GOLD HD",
    "logo": "images/134-star-gold-hd.png",
    "url": "http://198.195.239.50:8095/starGold/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 135,
    "name": "STAR PLUS HD",
    "logo": "images/135-star-plus-hd.png",
    "url": "http://198.195.239.50:8095/starPlus/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 136,
    "name": "STAR MOVIES HD",
    "logo": "images/136-star-movies-hd.png",
    "url": "http://198.195.239.50:8095/starMovies/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 137,
    "name": "ZEE TV HD",
    "logo": "images/137-zee-tv-hd.png",
    "url": "http://198.195.239.50:8095/zeeTV/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 138,
    "name": "ZEE CINEMA HD",
    "logo": "images/138-zee-cinema-hd.png",
    "url": "http://198.195.239.50:8095/zeeChinema/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 139,
    "name": "COLORS HD",
    "logo": "images/139-colors-hd.png",
    "url": "http://198.195.239.50:8095/colors/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 140,
    "name": "COLORS CINEPLEX HD",
    "logo": "images/140-colors-cineplex-hd.png",
    "url": "http://198.195.239.50:8095/colorsCineplex/index.m3u8",
    "category": "Hindi"
  },
  {
    "id": 141,
    "name": "9XM MUSIC",
    "logo": "images/141-9xm-music.png",
    "url": "http://198.195.239.50:8095/9xm/index.m3u8",
    "category": "Music"
  },
  {
    "id": 142,
    "name": "DISCOVERY HD",
    "logo": "images/142-discovery-hd.png",
    "url": "http://198.195.239.50:8095/discovery/index.m3u8",
    "category": "Documentary"
  },
  {
    "id": 143,
    "name": "ANIMAL PLANET HD",
    "logo": "images/143-animal-planet-hd.png",
    "url": "http://198.195.239.50:8095/animalPlanet/index.m3u8",
    "category": "Documentary"
  },
  {
    "id": 144,
    "name": "DISCOVERY KIDS HD",
    "logo": "images/144-discovery-kids-hd.png",
    "url": "http://198.195.239.50:8095/disnepKids/index.m3u8",
    "category": "Kids"
  }

];

if (typeof module !== 'undefined') {
    module.exports = channels;
}

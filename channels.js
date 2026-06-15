// A1 TV Channel Database
// Automatically parsed and categorized

const channels = [
    {
        "id": 1,
        "name": "Somoy TV",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560559088.png",
        "url": "https://iptv.ryvoxtb.workers.dev/live/somoytv.m3u8?token=698bb62d6919e5c22ec8be7a017971f5&time=1781488364",
        //"url": "https://live.thebosstv.com:30443/dwlive/Somoy-TV/chunks.m3u8",
        "category": "News"
    },
    {
        "id": 2,
        "name": "BTV",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561595482.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 3,
        "name": "T Sports",
        "logo": "https://s3.aynaott.com/storage/9fbf3e9ed22c8cc71c93f25d6cb9be32",
        "url":  "http://198.195.239.50:8095/tsports/tracks-v1a1/mono.m3u8",
        //"url":  "https://premierleagpl23.akamaized.net/hls/live/2107108/Tapmad-P2s6L_EnG-FiN@L/level_0.m3u8",
        "category": "Sports"
    },
    {
        "id": 4,
        "name": "Channel I",
        "logo": "https://s3.aynaott.com/storage/28931315743beff50fc2c1312b1f8261",
        "url": "https://tvsen6.aynaott.com/channeli/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 5,
        "name": "NTV",
        "logo": "https://s3.aynaott.com/storage/73c39182782a201338070c2f4429e449",
        "url": "https://tvsen5.aynaott.com/xV4jEKf3D9zc/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 6,
        "name": "Bangla Vision",
        "logo": "https://s3.aynaott.com/storage/e86c14566b4d5b6dd68ac37dce4f6043",
        "url": "https://tvsen5.aynaott.com/banglavision/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 7,
        "name": "RTV",
        "logo": "https://s3.aynaott.com/storage/fd634ca672c8294f109225ca42d20991",
        "url": "https://tvsen5.aynaott.com/RtvHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 8,
        "name": "ATN Bangla",
        "logo": "https://s3.aynaott.com/storage/a4d2bbdb65b4abc239eaddedda1e5d22",
        "url": "https://tvsen5.aynaott.com/atnbangla/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 9,
        "name": "Maasranga TV",
        "logo": "https://s3.aynaott.com/storage/5db4a54244a315684254b441e92539e2",
        "url": "https://tvsen5.aynaott.com/maasrangatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 10,
        "name": "Deepto TV",
        "logo": "https://s3.aynaott.com/storage/12462ef0383fa0e927215d56cd51acf8",
        "url": "https://tvsen5.aynaott.com/DeeptoTVHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 11,
        "name": "Duronto TV",
        "logo": "https://s3.aynaott.com/storage/1d3d06e02fc9ba45a990b65aebd04ebc",
        "url": "https://tvsen5.aynaott.com/durontotv/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 12,
        "name": "ETV",
        "logo": "https://s3.aynaott.com/storage/d805cf57543080b49de8a2621cd54da4",
        "url": "https://tvsen6.aynaott.com/etv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 13,
        "name": "Somoy News TV",
        "logo": "https://s3.aynaott.com/storage/cbadf009eebf7506c7633b3a98a2f042",
        "url": "https://tvsen6.aynaott.com/somoytv/index.m3u8",
        "category": "News"
    },
    {
        "id": 14,
        "name": "T Sports HD",
        "logo": "https://s3.aynaott.com/storage/9fbf3e9ed22c8cc71c93f25d6cb9be32",
        "url": "https://tvsen5.aynaott.com/tsports/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 15,
        "name": "Gazi TV",
        "logo": "https://s3.aynaott.com/storage/0b4d83d0baf7513beae135e134fced2c",
        "url": "https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 16,
        "name": "Desh TV",
        "logo": "https://s3.aynaott.com/storage/9ef657aca7c0009e4f0675af3b5190d8",
        "url": "https://tvsen6.aynaott.com/deshtv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 17,
        "name": "Boishakhi TV",
        "logo": "https://s3.aynaott.com/storage/ec66cdf9538da75b08112f9ae2f151bc",
        "url": "https://tvsen6.aynaott.com/boishakhitv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 18,
        "name": "Channel 9",
        "logo": "https://s3.aynaott.com/storage/affd223f023a705e3a1c5df263d0a7ef",
        "url": "https://tvsen6.aynaott.com/channel9/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 19,
        "name": "Channel 24",
        "logo": "https://s3.aynaott.com/storage/502b8de24fcfc4443c376270a6e45527",
        "url": "https://tvsen6.aynaott.com/channel24/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 20,
        "name": "Asian TV",
        "logo": "https://s3.aynaott.com/storage/8faf522ac37bfcd9c163145f77a9a024",
        "url": "https://tvsen6.aynaott.com/asiantv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 21,
        "name": "ATN News",
        "logo": "https://s3.aynaott.com/storage/8e9db8284bf110dce597f48674d1968a",
        "url": "https://tvsen6.aynaott.com/atnnews/index.m3u8",
        "category": "News"
    },
    {
        "id": 22,
        "name": "Independent TV",
        "logo": "https://s3.aynaott.com/storage/ee4466e6b775bf83f4f5a90a1dc89234",
        "url": "https://tvsen6.aynaott.com/independenttv/index.m3u8",
        "category": "News"
    },
    {
        "id": 23,
        "name": "SA TV",
        "logo": "https://s3.aynaott.com/storage/83796140b05a889d37c4c98ed8c43821",
        "url": "https://tvsen6.aynaott.com/satv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 24,
        "name": "DBC News",
        "logo": "https://s3.aynaott.com/storage/e8bb743022a2b6b0ee714bbdb2715cbe",
        "url": "https://tvsen6.aynaott.com/dbcnews/index.m3u8",
        "category": "News"
    },
    {
        "id": 25,
        "name": "Ekhon TV",
        "logo": "https://s3.aynaott.com/storage/94ff4123b6c533d0332d63944ccf5868",
        "url": "https://tvsen6.aynaott.com/ekhontv/index.m3u8",
        "category": "News"
    },
    {
        "id": 26,
        "name": "News 24 BD",
        "logo": "https://s3.aynaott.com/storage/b102f206ea73dfdbc591e9cf6c8c478d",
        "url": "https://tvsen6.aynaott.com/news24/index.m3u8",
        "category": "News"
    },
    {
        "id": 27,
        "name": "Bangla TV",
        "logo": "https://s3.aynaott.com/storage/5b22893ae4e816ef2cf87e63c96e9e08",
        "url": "https://tvsen6.aynaott.com/banglatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 28,
        "name": "Ekattor TV",
        "logo": "https://s3.aynaott.com/storage/c69d4851784c5fefa6d0117653d227c3",
        "url": "https://tvsen6.aynaott.com/ekattorbdtv/index.m3u8",
        "category": "News"
    },
    {
        "id": 29,
        "name": "Jamuna TV",
        "logo": "https://s3.aynaott.com/storage/18c65f48bb15b1e59a8d91b8d1675122",
        "url": "https://tvsen6.aynaott.com/jamunatv/index.m3u8",
        "category": "News"
    },
    {
        "id": 30,
        "name": "Mohona TV",
        "logo": "https://s3.aynaott.com/storage/663c8079982ff6a45fc99e78c865a63d",
        "url": "https://tvsen6.aynaott.com/mohonatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 31,
        "name": "NEXUS TV",
        "logo": "https://s3.aynaott.com/storage/db85422953e3a1652e26b0a14eed92a9",
        "url": "https://tvsen6.aynaott.com/nexustv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 32,
        "name": "Bijoy TV",
        "logo": "https://s3.aynaott.com/storage/589934eb6a1c264a0ee6bf6d82fad81c",
        "url": "https://tvsen6.aynaott.com/bijoytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 33,
        "name": "Global TV",
        "logo": "https://s3.aynaott.com/storage/bda05e1c2173251baebc20ffe43dea0b",
        "url": "https://tvsen6.aynaott.com/globaltvhd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 34,
        "name": "My TV",
        "logo": "https://s3.aynaott.com/storage/d93b76211f818fcce66e7f44119ce0be",
        "url": "https://tvsen6.aynaott.com/mytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 35,
        "name": "Ananda TV",
        "logo": "https://s3.aynaott.com/storage/225c955ff4174c976ab01d7214b3f28f",
        "url": "https://tvsen6.aynaott.com/anandatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 36,
        "name": "A sports",
        "logo": "https://s3.aynaott.com/storage/f32cb68f73e383cf0e3f12ad2732b902",
        "url": "https://tvsen7.aynaott.com/asports-bkp/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 37,
        "name": "Jamuna TV Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560213832.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 38,
        "name": "DBC News Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770186306600.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 39,
        "name": "Independent Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739964387847.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 40,
        "name": "Ekattor Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739963327549.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 41,
        "name": "Channel 24 Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735556516924.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 42,
        "name": "News 24 Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770186895850.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 43,
        "name": "ATN News Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739962961772.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 44,
        "name": "Al Jazeera",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735547218986.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 45,
        "name": "Star News",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770189826301.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 46,
        "name": "Deepto Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1742713000749.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 47,
        "name": "SATV Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770187361105.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 48,
        "name": "Channel 9 Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770188008067.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 49,
        "name": "Ekhon Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770189283848.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 50,
        "name": "Channel I Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1740567626692.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 51,
        "name": "ATN Bangla Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1740553740665.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 52,
        "name": "Bangla Vision Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561344354.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 53,
        "name": "NTV Premium",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 54,
        "name": "BTV World",
        "logo": "https://s3.aynaott.com/storage/b30147b97d86754e4b97fc2989628391",
        "url": "https://tvsen6.aynaott.com/btv_world/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 55,
        "name": "BTV CTG",
        "logo": "https://s3.aynaott.com/storage/00da8a07fb26b2fb79359ee535e4c7bc",
        "url": "https://tvsen6.aynaott.com/btvctg/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 56,
        "name": "Peace TV Bangla HD",
        "logo": "https://s3.aynaott.com/storage/e33b23f7dc3d39008d672952c33069d4",
        "url": "https://tvsen7.aynaott.com/PeaceTvBanglaHD/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 57,
        "name": "TIME TV USA",
        "logo": "https://s3.aynaott.com/storage/111bfd01fb43770e925ca9cf16663f56",
        "url": "https://tvsen7.aynaott.com/timetv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 58,
        "name": "Channel I (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/8e998f20a9cc52cb8eb1f52a5bf38204",
        "url": "https://tvsen6.aynaott.com/channeli/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 59,
        "name": "NTV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/1a619c9b917eb35898020cd323e415a7",
        "url": "https://tvsen5.aynaott.com/ntvbd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 60,
        "name": "Bangla Vision (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/788ab3e49b2aa6af247722762ed6e72a",
        "url": "https://tvsen5.aynaott.com/banglavision/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 61,
        "name": "RTV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/094587a26f2c5e4f2962104728ec8c5d",
        "url": "https://tvsen5.aynaott.com/RtvHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 62,
        "name": "ATN Bangla (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/eff41809fca04f7c1da5481e135d7913",
        "url": "https://tvsen5.aynaott.com/atnbangla/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 63,
        "name": "ETV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/8a1af81802b0728c064c2adabcdc72c8",
        "url": "https://tvsen6.aynaott.com/etv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 64,
        "name": "Maasranga TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/1b5cb8c7901739cd7d201a38d2ab4737",
        "url": "https://tvsen5.aynaott.com/maasrangatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 65,
        "name": "Deepto TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/76717b7a598a30815a1bdb16ecd3af6c",
        "url": "https://tvsen5.aynaott.com/DeeptoTVHD/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 66,
        "name": "Gazi TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/417a833f6d83021c99bfc3d4176610f4",
        "url": "https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 67,
        "name": "Desh TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/d10390e5434e8cb44172257abd714beb",
        "url": "https://tvsen6.aynaott.com/deshtv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 68,
        "name": "Boishakhi TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/58658d4594ca1ff3c5031c9d8e3d9fc0",
        "url": "https://tvsen6.aynaott.com/boishakhitv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 69,
        "name": "Channel 9 (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/a959f06b4fc9e1421f867b6c1601fe43",
        "url": "https://tvsen6.aynaott.com/channel9/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 70,
        "name": "Asian TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/5282cec3a2e9349b750540d658cf1b6c",
        "url": "https://tvsen6.aynaott.com/asiantv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 71,
        "name": "SA TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/f710d2ff532cb7e7b75566232c5b72d3",
        "url": "https://tvsen6.aynaott.com/satv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 72,
        "name": "Duronto TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/51f1530c076c027e431bf18a49613f0b",
        "url": "https://tvsen6.aynaott.com/durontotv-live/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 73,
        "name": "Bangla TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/e42ecfa90e3d6b15bdb7fea5ef673864",
        "url": "https://tvsen6.aynaott.com/banglatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 74,
        "name": "BTV NATIONAL HD",
        "logo": "https://s3.aynaott.com/storage/9b6f35f73a099b7a5885a970523c5f78",
        "url": "https://tvsen6.aynaott.com/btvhd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 75,
        "name": "Ananda TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/897698f593fc07974fc46881a440733d",
        "url": "https://tvsen6.aynaott.com/anandatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 76,
        "name": "My TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/c5b2c623863fbe4033d59d52ff7371ac",
        "url": "https://tvsen6.aynaott.com/mytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 77,
        "name": "Global TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/ffd7ba9b76ad555933f94bcb7ff26b44",
        "url": "https://tvsen6.aynaott.com/globaltvhd/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 78,
        "name": "Bijoy TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/f23d6f82c1a16458fe0e4c6f11b8fd87",
        "url": "https://tvsen6.aynaott.com/bijoytv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 79,
        "name": "NEXUS TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/90635c3edf6e3c8dd92210b7248f1fa0",
        "url": "https://tvsen6.aynaott.com/nexustv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 80,
        "name": "Mohona TV (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/73082846fdc15d9f0e7268b104c55d92",
        "url": "https://tvsen6.aynaott.com/mohonatv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 81,
        "name": "Drama 24",
        "logo": "https://s3.aynaott.com/storage/08773290bf83a917aebc07810f12ed49",
        "url": "https://vods2.aynascope.net/gseriesDrama/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 82,
        "name": "T Sports HD (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/b54495ee3cdd53ddaa19d1f98120f488",
        "url": "https://tvsen7.aynaott.com/tsports-hd/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 83,
        "name": "PTV Sports (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/9d9d7cbfba5a8ceea648bbd963ad1014",
        "url": "https://tvsen5.aynaott.com/PtvSports/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 84,
        "name": "A sports (Aynaott)",
        "logo": "https://s3.aynaott.com/storage/64de30d2df9b2a888cb73f17614a9a8b",
        "url": "https://tvsen6.aynaott.com/asports/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 85,
        "name": "Cricket Gold",
        "logo": "https://s3.aynaott.com/storage/7d20b575edc4e4b5276faa8c246e72a4",
        "url": "https://tvsen6.aynaott.com/CricketGold/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 86,
        "name": "Al Jazeera",
        "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735547218986.png",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 87,
        "name": "Bein Sports",
        "logo": "https://s3.aynaott.com/storage/04a56bc13c4c486ad4a4d82a1e00fd73",
        "url": "http://fl1.moveonjoy.com/BEIN_SPORTS/index.m3u8",
        "category": "Sports"
    },
    {
        "id": 88,
        "name": "Bloomberg TV",
        "logo": "https://s3.aynaott.com/storage/253dcc8b5951160d6aa26bc5ac65ddb8",
        "url": "https://tvsen6.aynaott.com/bloombergtv/index.m3u8",
        "category": "News"
    },
    {
        "id": 89,
        "name": "Cartoon Network",
        "logo": "https://s3.aynaott.com/storage/a89142109d049ae325fd1681b50bfffb",
        "url": "https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 90,
        "name": "Nickelodeon",
        "logo": "https://s3.aynaott.com/storage/bb2375af2d1ff8666f2c24fbcec3c541",
        "url": "https://tvsen7.aynaott.com/nicklodean/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 91,
        "name": "DW News",
        "logo": "https://ui-avatars.com/api/?name=DW%20News&background=0D1117&color=00B4D8&bold=true",
        "url": "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8",
        "category": "News"
    },
    {
        "id": 92,
        "name": "France 24 English",
        "logo": "https://ui-avatars.com/api/?name=France%2024&background=0D1117&color=00B4D8&bold=true",
        "url": "https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_2300.m3u8",
        "category": "News"
    },
    {
        "id": 93,
        "name": "NDTV English",
        "logo": "https://ui-avatars.com/api/?name=NDTV&background=0D1117&color=00B4D8&bold=true",
        "url": "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8",
        "category": "News"
    },
    {
        "id": 94,
        "name": "CNN",
        "logo": "https://ui-avatars.com/api/?name=CNN&background=0D1117&color=00B4D8&bold=true",
        "url": "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
        "category": "News"
    },
    {
        "id": 95,
        "name": "RT News",
        "logo": "https://ui-avatars.com/api/?name=RT%20News&background=0D1117&color=00B4D8&bold=true",
        "url": "https://rt-glb.rttv.com/live/rtnews/playlist.m3u8",
        "category": "News"
    },
    {
        "id": 96,
        "name": "PBS Kids",
        "logo": "https://ui-avatars.com/api/?name=PBS%20Kids&background=0D1117&color=00B4D8&bold=true",
        "url": "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8",
        "category": "Kids"
    },
    {
        "id": 97,
        "name": "Disney Channel",
        "logo": "https://s3.aynaott.com/storage/a0c74b576321da5aa33a69806401caf1",
        "url": "https://tvsen7.aynaott.com/disney/index.m3u8",
        "category": "Kids"
    },
    {
        "id": 98,
        "name": "HBO",
        "logo": "https://s3.aynaott.com/storage/4a1291716680b5c095d33e106337bb04",
        "url": "https://tvsen5.aynaott.com/hbo/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 99,
        "name": "Discovery Family",
        "logo": "https://s3.aynaott.com/storage/3f7983c0bc7cacd206dd195a2eff6b10",
        "url": "https://tvsen5.aynaott.com/discoveryfamily/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 100,
        "name": "National Geographic",
        "logo": "https://s3.aynaott.com/storage/2dce8297266bbc9c235c27119f914e1b",
        "url": "https://tvsen6.aynaott.com/natgeo/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 101,
        "name": "MTV",
        "logo": "https://s3.aynaott.com/storage/c0bfcdb40393eb5824907adaaa63a653",
        "url": "https://tvsen6.aynaott.com/mtv/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 102,
        "name": "Fox News",
        "logo": "https://s3.aynaott.com/storage/20e4602dd584784607e5eff3963cdde6",
        "url": "https://tvsen6.aynaott.com/foxbusiness/index.m3u8",
        "category": "News"
    },
    {
        "id": 103,
        "name": "CNBC",
        "logo": "https://s3.aynaott.com/storage/16a213d06e7362d97cb6085e70c9b5a2",
        "url": "https://tvsen6.aynaott.com/cnbc/index.m3u8",
        "category": "News"
    },
    {
        "id": 104,
        "name": "Travel Channel",
        "logo": "https://s3.aynaott.com/storage/a7f87f1e71905ee14429ed26abd29b2a",
        "url": "https://tvsen6.aynaott.com/travelxp/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 105,
        "name": "Food Network",
        "logo": "https://s3.aynaott.com/storage/582675c375dfa47c2d66e6639fcd2eac",
        "url": "https://tvsen6.aynaott.com/foodnetwork/index.m3u8",
        "category": "Entertainment"
    },
    {
        "id": 106,
        "name": "Peace TV Urdu HD",
        "logo": "https://s3.aynaott.com/storage/5442b2655aca6398b26ba539f396565a",
        "url": "https://tvsen6.aynaott.com/PeaceTVUrduHD/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 107,
        "name": "Madani TV",
        "logo": "https://s3.aynaott.com/storage/813fca9bc7df9a4810efe2eb87c57039",
        "url": "https://tvsen7.aynaott.com/MadaniTV/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 108,
        "name": "Islam TV",
        "logo": "https://s3.aynaott.com/storage/5e74c3498e10b3cd2dadfe676681d387",
        "url": "https://tvsen6.aynaott.com/islam/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 109,
        "name": "Deen TV",
        "logo": "https://s3.aynaott.com/storage/66ac3ae1e56001353b69bb5f63ebcc6e",
        "url": "https://tvsen7.aynaott.com/deen/index.m3u8",
        "category": "Islamic"
    },
    {
        "id": 110,
        "name": "NewsMax",
        "logo": "https://ui-avatars.com/api/?name=NewsMax&background=0D1117&color=00B4D8&bold=true",
        "url": "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8",
        "category": "News"
    },
     {
        "id": 111,
        "name": "Channel One",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c3/%E0%A6%9A%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B2_%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg",
        "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8",
        "category": "News"
    },
    {
        "id": 112,
        "name": "Zibo TV",
        "logo": "https://ziboplay.com/assets/uploads/sddd-019d29b6-e1cb-7039-8b93-01c26c877ba3-1.jpeg",
        "url": "https://fifaexclusive.myziboplay.xyz/Fifa/tracks-v1a1/mono.m3u8?token=fe6Uuugm3xgIm2",
        "category": "Entertainment"
    },
];

if (typeof module !== 'undefined') {
    module.exports = channels;
}

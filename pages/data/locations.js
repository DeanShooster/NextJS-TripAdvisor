const tripLocations = [
    {
        location: 'Thailand',
        text: 'Thailand is a Southeast Asian country. Its known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin.',
        price: 599.99,
        image: 'https://img.freepik.com/premium-photo/early-morning-view-from-kayak-siwash-rock-stanley-park_645882-273.jpg?w=1380'
    },
    {
        location: 'Finland',
        text: 'Finland is a Northern European nation bordering Sweden, Norway and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea. Helsinki is home to the 18th-century sea fortress Suomenlinna, the fashionable Design District and diverse museums. The Northern Lights can be seen from the countrys Arctic Lapland province, a vast wilderness with national parks and ski resorts. ',
        price: 999.99,
        image: 'https://img.freepik.com/premium-photo/panorama-aurora-borealis-with-milky-way-galaxy-snow-mountain-coastline_49071-212.jpg?w=1380'
    },
    {
        location: 'Germany',
        text: 'Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank. ',
        price: 1245.49,
        image: 'https://img.freepik.com/free-photo/beautiful-scenery-pathway-forest-with-trees-covered-with-frost_181624-42376.jpg?w=1380&t=st=1660561394~exp=1660561994~hmac=45c41fc2aa7ca8474bf8a5b178cda7223d9187a22ff1729d01a71eac7bbcbce0'
    },
    {
        location: 'Japan',
        text: 'Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south.',
        price: 2000,
        image: 'https://img.freepik.com/free-photo/pink-tree-nami-island-korea_335224-522.jpg?w=1380&t=st=1660561438~exp=1660562038~hmac=e6afe5ecc9f3f9a6b14090ea7f184def370349c43b74748f6aeed1cd41eba09c'
    }
];

const locationImages = [
    {
        location: 'Thailand',
        images: [
            'https://img.freepik.com/free-photo/narrow-wooden-bridge-inside-forest_181624-2809.jpg?w=1380&t=st=1660633850~exp=1660634450~hmac=94d3bed09406302cda7248d83bbea88f97837ced4b9b777e36d1350be2335686',
            'https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=1380&t=st=1660633860~exp=1660634460~hmac=3d6f90718508d5c79ace290a610d8e836472c3c73f7c3c0b3832937365005574',
            'https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=1380&t=st=1660633877~exp=1660634477~hmac=41aece8d601594425b8c8e69410f88d4278d288ee3d2fca7fc7695e0e6375736',
            'https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=1380&t=st=1660634874~exp=1660635474~hmac=7a92ebbd35efabcf983405db3368d0c50acc918d7deea0d5b9aa890c6b776610',
            'https://img.freepik.com/free-photo/curvy-narrow-muddy-road-dark-forest-surrounded-by-greenery-little-light-coming-from_181624-1825.jpg?w=1380&t=st=1660634885~exp=1660635485~hmac=4f454e2e109ada5250a6a4ef53e818e48e40e0ac16e256da871d0ccdbdb10083'
        ],
        price: 599.99,
        info: [
            'Best for those who likes to travel and see nature.',
            'Cheap compared to the western packages.',
            'Exotic food menu like you have never seen before.',
            'Enjoyable in all seasons.'
        ],
        rank: 3
    },
    {
        location: 'Finland',
        images: [
            'https://img.freepik.com/free-photo/view-snowy-mountain-fir-trees-with-blue-sky-background_9083-8044.jpg?w=1380&t=st=1660637846~exp=1660638446~hmac=d6d0f81554b4a2d01c2b423eb45d99c186d93eb41a75aeb62a93e77f4a7c2104',
            'https://img.freepik.com/premium-photo/dark-winter-forest-background-night_183410-61.jpg?w=1380',
            'https://img.freepik.com/free-photo/mysterious-winter-landscape-majestic-mountains-winter_146671-14057.jpg?w=1380&t=st=1660637874~exp=1660638474~hmac=ef7f6fa78c254c629e90b1fa9e003a3a33424c2b42c35ce3370e85ffe7fdac48',
            'https://img.freepik.com/free-photo/snow-covered-trees_1204-101.jpg?t=st=1660637859~exp=1660638459~hmac=ee2a3ff2aec12bf84635156077607853614a830372742c129cec8c36171ab3e0',
            'https://img.freepik.com/premium-photo/winter-landscape-forest-snowy-weather-january-beautiful-landscape-snowy-forest-trip-north_548821-13780.jpg?w=1380',
            'https://img.freepik.com/free-photo/beautiful-wide-shot-ruth-glaciers-covered-snow-blue-sky-with-white-clouds_181624-3624.jpg?w=1380&t=st=1660637901~exp=1660638501~hmac=7336fcb19b9cafe0c82ecd63943ab1a7023576599fe0ad20ad08765ffe0c58b5'
        ],
        price: 999.99,
        info: [
            'Best for those who likes the cold and ski',
            'A rare chance to see the north blue sky ray',
            'Enjoyable in all seasons but preferred in the winter'
        ],
        rank: 4
    },
    {
        location: 'Germany',
        images: [
            'https://img.freepik.com/premium-photo/times-square-new-york_63253-7411.jpg?w=1380',
            'https://img.freepik.com/free-photo/clean-city-streets-prague_23-2149417731.jpg?w=1380&t=st=1660638419~exp=1660639019~hmac=63865c8c0db8fa4c10a88550c9cf476e121449b083c33156140fba38a6f6b1f5',
            'https://img.freepik.com/premium-photo/bus-street-financial-district-lower-downtown-manhattan-new-york-usa-skyline-cityscape-with-skyscrapers-united-states-america-nyc-us-road-american-architecture_250132-2661.jpg?w=740'
        ],
        price: 1245.49,
        info: [
            'Best for those who likes to explore landscape',
            'Center of Europe',
            'Enjoyable mostly outside the winter'
        ],
        rank: 2
    },
    {
        location: 'Japan',
        images: [
            'https://img.freepik.com/premium-photo/arashiyama-bamboo-forest_63253-4121.jpg?w=1380',
            'https://img.freepik.com/free-photo/pathway-middle-buildings-dark-sky-japan_181624-43078.jpg?w=1380&t=st=1660638591~exp=1660639191~hmac=48a165fcb5217b4aeedb6b329133f5d418774085c2057929ca9826ac82fed70f',
            'https://img.freepik.com/free-photo/chinese-tea-ceremony-park-tea-drinking-open-air_613910-7351.jpg?t=st=1660638606~exp=1660639206~hmac=17bd2457c46453e1bc9e3e0544f511275204a330a69a9e12b9e73be876874ff9',
            'https://img.freepik.com/free-photo/healthy-delicious-variety-sushi-dark-stone-background-top-view_482257-18739.jpg?w=1060&t=st=1660638630~exp=1660639230~hmac=018b64a45e3e64add5be621916ccf5444cdbecc2fd5d638451d2198f284a202f',
            'https://img.freepik.com/free-photo/people-walking-japan-street-nighttime_23-2148942945.jpg?w=1380&t=st=1660638657~exp=1660639257~hmac=4ec7c5bae75c74703c4865f9ee600cc5e475618951e999ded38e04d7cceb8179',
            'https://img.freepik.com/free-photo/cherry-blossoms-castle-himeji-japan_335224-161.jpg?w=1380&t=st=1660638664~exp=1660639264~hmac=26716e18c8f993528302325a0b5a8944ed44e05e7d45a83cc71b496b31ad9dd0'
        ],
        price: 2000,
        info: [
            'Best for those who want to explore culture',
            'Exotic culture, food and anything else',
            'Enjoyable in all seasons',
            'Anime'
        ],
        rank: 5
    }
];

export default { locationImages, tripLocations };
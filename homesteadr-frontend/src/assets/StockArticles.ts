interface Article {
    articleId: number;
    headline: string;
    url: string;
    publishedDate: string;
    affectedCities: string[];
    highlights: string[];
    Image_url?: string;
  }

  const articles: Article[] = [
    {
        "articleId": 2,
        "headline": "OpenAI and Softbank are starting a $500 billion AI data center company",
        "url": "https://www.theverge.com/2025/1/21/24348816/openai-softbank-ai-data-center-stargate-project",
        "Image_url": "https://duet-cdn.vox-cdn.com/thumbor/0x0:1613x1058/750x500/filters:focal(807x529:808x530):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25840970/videoframe_1799876.jpg",
        "publishedDate": "2025-01-21T14:45:00-08:00",
        "affectedCities": [
          "Abilene, TX",
          "Dallas-Fort Worth, TX",
          "Austin, TX", 
          "San Antonio, TX",
          "Houston, TX"
        ],
        "highlights": [
          "$500 billion investment planned over next 4 years",
          "Initial construction underway in Abilene at Lancium Clean Campus",
          "Partnership between OpenAI, Softbank, Oracle, MGX as initial equity funders",
          "Microsoft, NVIDIA, Oracle, Arm named as tech partners",
          "First phase includes 10 buildings in Abilene, expanding to 20",
          "Each building approximately 500,000 square feet",
          "Additional Texas metro areas under evaluation for expansion"
        ]
       },
       {
        "articleId": 2,
        "headline": "Top Five Data Center Stories: Week of January 13",
        "url": "https://www.datacenterknowledge.com/infrastructure/top-five-data-center-stories-week-of-january-13",
        "Image_url": "https://eu-images.contentstack.com/v3/assets/blt8eb3cdfc1fce5194/bltaf53da59fd067277/66210c043dac5e7b8ea1467a/Digital-Realty-Chessington-DC-UK.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
        "publishedDate": "2025-01-14T00:00:00Z",
        "affectedCities": [
            "Houston, TX",
            "Austin, TX"
        ],
        "highlights": [
            "DOE advocates 'all of the above' strategy for data center energy challenges",
            "Nuclear-powered data centers gaining attention",
            "Department of Energy emphasizes portfolio approach to solving data center energy needs",
            "Discussion of Small Modular Reactors (SMRs) for data center power",
            "Ongoing exploration of sustainable energy solutions for growing data center demand"
        ]
     },
     {
        "articleId": 3,
        "headline": "Driving the Data Center Boom in Central Texas",
        "url": "https://www.dpr.com/media/blog/driving-the-data-center-boom-in-central-texas",
        "Image_url": "https://img.dpr.com/content/assets/Stream-December-2024-22.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.6323&fp-y=0.4338&h=810&q=80&w=1440&s=65132dd390958df8573d94171ea58e5c",
        "publishedDate": "2025-01-24T00:00:00Z",
        "affectedCities": [
            "San Antonio, TX",
            "Houston, TX"
        ],
        "highlights": [
            "350,000 sq. ft. mission-critical data center under construction",
            "40 MW facility with phased turnover beginning May 2025",
            "Estimated 3,871 MW of data center projects under construction in first half of 2024",
            "69.2% increase in data center construction from previous year",
            "Prefabrication approach saving $1.8 million in electrical worker hours"
        ]
     },
     {
        "articleId": 4,
        "headline": "Data centers are booming in Texas. What does that mean for the grid?",
        "url": "https://www.texastribune.org/2025/01/24/texas-data-center-boom-grid/",
        "Image_url": "https://thumbnails.texastribune.org/msV7j3MMnO0FBKPDlEVpcJRmaXo=/1000x670/smart/filters:format(webp):quality(75)/https://static.texastribune.org/media/files/e91bedfac5b14a094fdfe8d9994f3c64/Data%20Center%20Cables%20REUTERS.jpg",
        "publishedDate": "2025-01-24T05:00:00Z", 
        "affectedCities": [
            "Dallas-Fort Worth",
            "Austin",
            "San Antonio",
            "Abilene"
        ],
        "highlights": [
            "Texas grid operator predicts power demand will nearly double by 2030",
            "279 data centers in Texas as of September 2024",
            "Large users expected to grow 60% this year",
            "Data centers projected to consume 11-12% of U.S. power demand by 2030",
            "Stargate venture to invest $500 billion in AI infrastructure",
            "10 data centers under construction in Texas with 10 more planned"
        ]
     },
     {
        "articleId": 5,
        "headline": "DFW becomes hot spot for 'data centers' as the AI race heats up",
        "url": "https://www.nbcdfw.com/news/local/dfw-becomes-hot-spot-for-data-centers-as-the-ai-race-heats-up/3742036/",
        "Image_url": "https://media.nbcdfw.com/2025/01/edged-dallas.png?fit=1885%2C853&quality=85&strip=all&w=975&h=548&crop=1",
        "publishedDate": "2025-01-16T08:56:00Z",
        "affectedCities": [
            "Irving, TX", 
            "Dallas-Fort Worth, TX",
            "Red Oak, TX"
        ],
        "highlights": [
            "President Biden signs executive order supporting data center development",
            "DFW ranks second-largest data center market in North America",
            "Edged Dallas opens 168,610-square-foot sustainable data center in Irving",
            "$1 billion data center campus under construction in Red Oak",
            "U.S. data center power demand could nearly triple in next three years",
            "Estimated to potentially consume up to 12% of country's electricity"
        ]
     },
     {
        "articleId": 6,
        "headline": "Stargate's first data center is underway in Texas",
        "url": "https://www.businessinsider.com/texas-stargate-data-center-build-cost-2025-1",
        "Image_url": "https://i.insider.com/67905e16ae09223df2baea63?width=1000&format=jpeg&auto=webp",

        "publishedDate": "2025-01-24T17:37:00-08:00",
        "affectedCities": [
            "Abilene, TX",
            "Dallas, TX"
        ],
        "highlights": [
            "$500 billion AI project announced by President Trump",
            "First data center campus under construction in Abilene, Texas",
            "Two 500,000 sq ft buildings currently being built",
            "Estimated $1.1 billion construction cost",
            "Joint venture between Oracle, OpenAI, and SoftBank"
        ]
     },
     {
        "articleId": 7,
        "headline": "Lincoln announces 131-acre data center campus in Dallas, Texas",
        "url": "https://www.datacenterdynamics.com/en/news/lincoln-announces-131-acre-data-center-campus-in-dallas-texas/",
        "Image_url": "https://media.datacenterdynamics.com/media/images/Lincoln_Rackhouse_Atlanta_Data_Center.width-358.jpg",
        "publishedDate": "2025-01-10T00:00:00Z",
        "affectedCities": [
            "Dallas, TX",
            "Red Oak, TX"
        ],
        "highlights": [
            "131-acre data center campus planned",
            "Up to 540MW of total power across 800,000 sq ft",
            "Four-building campus with 96MW per building",
            "First phase begins Q1 2025 with 2MW IT capacity",
            "Collaboration between Lincoln Property Company, Gigabit Fiber, and Tradition Holdings"
        ]
     },
     {
        "articleId": 8,
        "headline": "DataBank Announces New 480MW North Texas Data Center Campus Featuring Eight Two‑Story Data Centers",
        "url": "https://dallasinnovates.com/databank-announces-new-480mw-north-texas-data-center-campus-featuring-eight-two-story-data-centers/",
        "Image_url": "https://s24806.pcdn.co/wp-content/uploads/2024/09/Data_iStock-1329831663-e1726012844186.jpg",
        "publishedDate": "2024-09-10T00:00:00Z",
        "affectedCities": [
            "Red Oak, TX",
            "Dallas, TX"
        ],
        "highlights": [
            "480MW data center campus on 292 acres",
            "Eight two-story data centers planned",
            "First phase to be operational Q2 2026",
            "400MW substation with potential 240MW critical IT power",
            "Third new campus announced in past 12 months",
            "Designed to meet growing AI and cloud application demand"
        ]
     },
     {
        "articleId": 9,
        "headline": "Texas Data Center Markets Are Booming",
        "url": "https://www.trgdatacenters.com/resource/texas-data-center-markets-are-booming/",
        "Image_url": "https://www.trgdatacenters.com/wp-content/uploads/2018/12/usa-3808026_1920-1920x1080.jpg.webp",
        "publishedDate": "2025-01-01T00:00:00Z",
        "affectedCities": [
            "Austin, TX",
            "Dallas, TX", 
            "Houston, TX",
            "San Antonio, TX"
        ],
        "highlights": [
            "Texas ranks second in U.S. data center inventory",
            "Energy costs six times lower than California",
            "70% of Texas energy from wind and solar in early 2025",
            "83% of electricity from non-carbon-emitting sources",
            "Low energy prices and tax incentives driving data center growth",
            "Continued investment in grid infrastructure and renewable energy"
        ]
     },
     {
        "articleId": 10,
        "headline": "Trump's big AI goals start small: 57 jobs at a Texas data center",
        "url": "https://www.dallasnews.com/business/technology/2025/01/25/trumps-big-ai-goals-start-small-57-jobs-at-a-texas-data-center/",
        "Image_url": "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/HDUOHVGLEPXXBKWPEU4IO7HIQA.jpg?auth=8ec795acf6c4392d243afffeef91a196d2b99d762b5b6bf06ef8fcedbf5c6e89&height=553&width=830&smart=true&quality=80",
        "publishedDate": "2025-01-25T06:00:00Z",
        "affectedCities": [
            "Abilene, TX"
        ],
        "highlights": [
            "Stargate venture requires minimum of 57 full-time jobs at Abilene site",
            "875 acres reserved for data center construction",
            "First phase of project is 200-megawatt data center",
            "Plans to expand to 1.2 gigawatts of power",
            "10 buildings currently under construction, expected to expand to 20",
            "Each building will be 500,000 square feet"
        ]
     }
];

export default articles;

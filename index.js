const express = require('express');
const firebase = require('firebase');
const axios = require('axios');

const app = express();
const port = 3000;

// API endpoint

const firebaseConfig = {
    apiKey: 'AIzaSyA_LRP6esBn4SY4CqKvjLVTfTZqjc1acc8',
    appId: '1:1059098963812:web:13d59cd0113cffe1dd1471',
    messagingSenderId: '1059098963812',
    projectId: 'gym1-92daa',
    authDomain: 'gym1-92daa.firebaseapp.com',
    storageBucket: 'gym1-92daa.appspot.com',
    measurementId: 'G-XDVXQ2YPH5'
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();





app.get('/news', async (req, res) => {
    try {
   const data = db.collection('post').get();
    const post = [];
    (await data).forEach((doc) => {
        post.push({
            id: doc.id,
            data: doc.data()
        });
    });
    res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});






var data = [
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Aniruddha Dhar",
        "title": "Mumbai murder: Manoj Sane brought Nilgiri oil; took pics after chopping the body - Hindustan Times",
        "description": "A sister of Saraswati Vaidya got emotional after seeing a photograph of her long hair that the accused had cut and kept on the kitchen platform of their flat. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/mumbai-mira-road-murder-manoj-sane-brought-nilgiri-oil-pics-saraswati-vaidya-101686538716279.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/12/1600x900/Manoj-Sane--who-works-in-the-ration-shop-of-Boriva_1686542007789_1686542045685.jpg",
        "publishedAt": "2023-06-12T03:57:47Z",
        "content": "One of the sisters of Saraswati Vaidya, who was allegedly killed and chopped into multiple pieces by 56-year-old live-in partner Manoj Sane in Mumbai's Mira Road, got emotional after seeing a photogr… [+2270 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Gaurav Gupta",
        "title": "India vs Australia WTC Final: Shubman Gill may face match referee's ire over tweet - Indiatimes.com",
        "description": "Cricket News: Shubman Gill could be in trouble with the match referee for his tweet that took a dig at the third umpire for his controversial dismissal in the secon",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-test-championship/india-vs-australia-wtc-final-shubman-gill-may-face-match-referees-ire-over-tweet/articleshow/100926904.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-100926882,width-1070,height-580,imgsize-47036,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-06-12T03:54:00Z",
        "content": "India vs Australia WTC Final: How listless Team India superstars imploded against ruthless AustraliaA day that began with great hope for millions of Indian cricket lovers ended in despair as India lo… [+195 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "CME hurled by the Sun to hit Earth soon! G1-class Geomagnetic storm on the cards - HT Tech",
        "description": "National Oceanic and Atmospheric Administration (NOAA) forecasters have shed light on a potential CME impact that could hit Earth and spark a Geomagnetic storm soon.",
        "url": "https://tech.hindustantimes.com/tech/news/cme-hurled-by-the-sun-to-hit-earth-soon-g1-class-geomagnetic-storm-on-the-cards-71686541517680.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/12/1600x900/sun-2224937_1280_1677654423439_1686541617035.jpg",
        "publishedAt": "2023-06-12T03:47:51Z",
        "content": "Solar activity has been at a high in the last few months and that is probably due to the approaching Solar Maximum. Sun entered solar cycle 25 in 2019 and it is expected that it will hit its peak in … [+1899 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Financial Express"
        },
        "author": "The Financial Express",
        "title": "Share Market LIVE: Nifty, Sensex to open in green, hints SGX Nifty; traders eye May CPI figures - The Financial Express",
        "description": null,
        "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-nifty-sensex-to-open-in-green-hints-sgx-nifty-traders-eye-may-cpi-figures-12-june-2023-monday/3122164/",
        "urlToImage": null,
        "publishedAt": "2023-06-12T03:47:12Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Asit Manohar",
        "title": "Dividend stocks: ICICI Lombard to Cyient — six shares to trade ex-dividend today | Mint - Mint",
        "description": "Dividend stocks that are going to trade ex-dividend today are Reliance Industrial Infrastructure, Apcotex Industries, Tata Investment Corporation, Indian Bank, ICICI Lombard, Cyient",
        "url": "https://www.livemint.com/market/stock-market-news/dividend-stocks-icici-lombard-to-cyient-six-shares-to-trade-ex-dividend-today-11686538431845.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/12/600x338/Dividend_stocks_stock_market_news_1686538867440_1686538867689.jpg",
        "publishedAt": "2023-06-12T03:08:02Z",
        "content": "Dividend stocks 2023: After closure of Q4 results season, stock market investors are eagerly waiting for additional rewards that listed entities have declared during announcement of their quarterly n… [+3743 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Anxiety, Chaos At Mumbai Airport As Cyclone Biparjoy Hits Flight Ops - NDTV",
        "description": "Flight operations in Mumbai were affected last evening due to inclement weather with cyclone Biparjoy gushing over the Arabian Sea.",
        "url": "https://www.ndtv.com/mumbai-news/cyclone-biparjoy-hits-flight-operations-in-mumbai-passengers-hasseled-4113380",
        "urlToImage": "https://c.ndtvimg.com/2023-06/pruf03m8_cyclone-biparjoy-pti_625x300_09_June_23.jpg",
        "publishedAt": "2023-06-12T02:51:18Z",
        "content": "Cyclone Biparjoy: Mumbai witnessed heavy rain and strong winds\r\nMumbai/New Delhi: Flight operations in Mumbai were affected last evening due to inclement weather conditions, with cyclone Biparjoy gus… [+3515 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "No Lathicharge On Pilgrims: D Fadnavis On Maharashtra Temple Incident - NDTV",
        "description": "Maharashtra Deputy Chief Minister Devendra Fadnavis on Sunday denied reports of lathicharge on 'warkaris' by police in Alandi town in Pune district.",
        "url": "https://www.ndtv.com/india-news/no-lathicharge-on-pilgrims-in-temple-devendra-fadnavis-denies-opposition-charge-4113165",
        "urlToImage": "https://c.ndtvimg.com/2022-04/ctkkuna_devendra-fadnavis-presser-ndtv-650_650x400_25_April_22.jpg",
        "publishedAt": "2023-06-12T02:49:01Z",
        "content": "\"There was no lathicharge on the warkari community,\" Devendra Fadnavis said. (File photo)\r\nMumbai: Maharashtra Deputy Chief Minister Devendra Fadnavis on Sunday denied reports of lathicharge on 'wark… [+2899 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Shrishti Negi",
        "title": "Niharika Konidela CONFIRMS Divorce From Chaitanya Jonnalagadda With Latest Instagram Post? - News18",
        "description": "Niharika Konidela welcomed her sister-in-law Lavanya Tripathi with open arms into the family after the actress got engaged to Varun Tej.",
        "url": "https://www.news18.com/movies/niharika-konidela-confirms-divorce-from-chaitanya-jonnalagadda-with-latest-instagram-post-8055325.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/06/niharika-konidela-divorce-168653620916x9.jpg",
        "publishedAt": "2023-06-12T02:29:05Z",
        "content": "Telugu actress Niharika Konidela has been grabbing headlines for rumours about her divorce from Chaitanya Jonnalagadda. Niharika Konidela and Chaitanya have been married since 2020. However, multiple… [+1858 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": "Press Trust of India",
        "title": "\"I Fail To Understand...\": Sachin Tendulkar Slams India's WTC Final Team Selection - NDTV Sports",
        "description": "Sachin Tendulkar was surprised with the fact that he found it difficult to believe that a bowler of Ashwin's calibre can't be used in conditions which are seamer-friendly.",
        "url": "https://sports.ndtv.com/cricket/i-fail-to-understand-sachin-tendulkar-slams-indias-wtc-final-team-selection-4112974",
        "urlToImage": "https://c.ndtvimg.com/2023-06/jbscip08_e_625x300_11_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2023-06-12T02:21:10Z",
        "content": "The legendary Sachin Tendulkar found senior off-spinner Ravichandran Ashwin's exclusion from India's playing XI for the World Test Championship final baffling, as a spinner of his calibre doesn't nee… [+1358 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Trump Retains His Base With Risk Of Political Violence In Focus - NDTV",
        "description": "Former President Donald Trump is broadly holding on to his Republican base as he heads to court to face federal charges that are raising concern about the risk of violence incited by some of his most fervent supporters.",
        "url": "https://www.ndtv.com/world-news/donald-trump-retains-his-base-with-risk-of-political-violence-in-focus-4113356",
        "urlToImage": "https://c.ndtvimg.com/2023-06/d1v1pcf8_donald-trump-bloomberg_625x300_12_June_23.jpg",
        "publishedAt": "2023-06-12T02:19:33Z",
        "content": "Donald Trump dismissed indictment during two speeches at GOP state conventions over weekend\r\nFormer President Donald Trump is broadly holding on to his Republican base as he heads to court to face fe… [+4832 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Parth Shastri",
        "title": "8% of people in Guj are diabetic, 10.5% prediabetic: ICMR study - Indiatimes.com",
        "description": "A recent study by a team from the Indian Council of Medical Research (ICMR) found that 8.1% of those surveyed in Gujarat, as part of the nationwide su",
        "url": "https://timesofindia.indiatimes.com/city/ahmedabad/8-of-people-in-guj-are-diabetic-10-5-prediabetic-icmr-study/articleshow/100924917.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-100924932,width-1070,height-580,imgsize-19922,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-06-12T02:18:00Z",
        "content": "How does your zodiac maintain a relationship?"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Krishna Priya Pallavi",
        "title": "Madhu Mantena-Ira Trivedi's reception: Hrithik Roshan-Saba Azad, Sara Ali Khan, Kartik Aaryan and others, who wore what - Hindustan Times",
        "description": "Madhu Mantena and Ira Trivedi hosted a grand reception attended by Hrithik Roshan and Saba Azad, Sara Ali Khan, Kartik Aaryan and more stars. See who wore what. | Fashion Trends",
        "url": "https://www.hindustantimes.com/lifestyle/fashion/madhu-mantena-ira-trivedi-reception-hrithik-roshan-saba-azad-sara-ali-khan-kartik-aaryan-and-others-who-wore-what-101686535455169.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/12/1600x900/Madhu_Mantena_Ira_Trivedi_Hrithik_Saba_Sara_Kartik_1686535986170_1686536000385.jpg",
        "publishedAt": "2023-06-12T02:15:56Z",
        "content": "Fashion designer Masaba Gupta's ex-husband, filmmaker Madhu Mantena, tied the knot with author and yoga guru Ira Trivedi in Mumbai. The couple hosted their wedding reception last night and invited th… [+3956 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Avika Gor says South film industry is all about nepotism - Hindustan Times",
        "description": "Avika Gor said in a new interview that the South film industry is all about nepotism, but the hype around the topic exists only in Bollywood.",
        "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/avika-gor-says-south-film-industry-is-all-about-nepotism-101686492341214.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/12/1600x900/avika_gor_1686535349744_1686535349881.png",
        "publishedAt": "2023-06-12T02:06:09Z",
        "content": "Actor Avika Gor shot to fame as a child actor with her performance as Anandi in the Television show Balika Vadhu. The actor has since worked in another hugely popular TV show Sasural Simar Ka, and ha… [+2358 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Bridge-sized asteroid to come shockingly close to Earth! NASA reveals speed - HT Tech",
        "description": "A colossal bridge-sized asteroid is set to make its closest approach towards Earth today and it is potentially hazardous!. Know its speed, distance, and more, as per NASA.",
        "url": "https://tech.hindustantimes.com/tech/news/bridgesized-asteroid-to-come-shockingly-close-to-earth-nasa-reveals-speed-71686535386345.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/12/1600x900/orbit-viewer-snapshot_1686535486318_1686535489062.jpg",
        "publishedAt": "2023-06-12T02:05:33Z",
        "content": "While asteroids pass Earth at close distances almost on a daily basis, none of them are potentially world-ending. NASA classifies asteroids as Potentially Hazardous' if they come within 7.5 million k… [+2000 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Apple plans to release a more affordable Vision Pro by 2025 - Times of India",
        "description": "Apple is reportedly working on a more affordable version of its first augmented reality headset, the Vision Pro, which is priced at $3,500 and is expe",
        "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-plans-to-release-a-more-affordable-vision-pro-by-2025/articleshow/100924453.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-100924439,width-1070,height-580,imgsize-532307,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-06-12T01:38:00Z",
        "content": "5G phones with Snapdragon 695, 5000mAh battery under Rs 20K"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Global market: SGX Nifty, CPI inflation to US Fed, key triggers for Indian stock market | Mint - Mint",
        "description": "SGX Nifty was trading 74.5 points, or 0.40%, higher at 18,684.5, indicating a positive start for the Indian indices.",
        "url": "https://www.livemint.com/market/stock-market-news/global-market-sgx-nifty-cpi-inflation-to-us-fed-key-triggers-for-indian-stock-market-11686532995733.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/12/600x338/2020-0_08T054011Z_806463651RT_RTRMADP__1686533289733_1686533290126.JPG",
        "publishedAt": "2023-06-12T01:32:12Z",
        "content": "Asian markets traded on a mixed note on Monday as investors remained cautious ahead of interest rate decisions from a slew of major global central banks this week including the US Federal Reserve, Eu… [+2758 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Sanjay Sharma",
        "title": "MHT CET Result 2023: Maharashtra CET Result for PCB, PCM out today @cetcell.mahacet.org - Times of India",
        "description": "News News: Maharashtra CET Result 2023 for PCM and PCB groups has been announced by the CET cell. Students can check their results on the official website of MAH",
        "url": "https://timesofindia.indiatimes.com/education/news/mht-cet-result-2023-maharashtra-cet-result-for-pcb-pcm-out-todaycetcell-mahacet-org/articleshow/100917729.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-100927083,width-1070,height-580,imgsize-35330,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-06-12T01:30:00Z",
        "content": "CSBC Recruitment 2023: How to Apply For 21,391 Constable Posts"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "As Ukraine War Rages On, Russia Finds An Ally In North Korea - NDTV",
        "description": "North Korean leader Kim Jong Un has vowed to \"hold hands\" with Russian President Vladimir Putin and bolster strategic cooperation on their shared goal of building a powerful country, state media KCNA reported on Monday.",
        "url": "https://www.ndtv.com/world-news/north-koreas-kim-jong-un-vows-to-hold-hands-with-vladimir-putin-for-strategic-cooperation-4113311",
        "urlToImage": "https://c.ndtvimg.com/2022-07/ogvps718_kim-jong-un-reuters_625x300_28_July_22.jpg",
        "publishedAt": "2023-06-12T01:22:39Z",
        "content": "Kim Jong Un called for \"closer strategic cooperation\" with Moscow.\r\nSeoul: North Korean leader Kim Jong Un has vowed to \"hold hands\" with Russian President Vladimir Putin and bolster strategic cooper… [+980 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Garena Free Fire MAX Redeem Codes for June 12: Grab in-game rewards for FREE! - HT Tech",
        "description": "Garena Free Fire MAX Redeem Codes for June 12: Garena Free Fire MAX redeem codes allow you to grab amazing skins, costumes, diamonds, and bundles for free. Here’s how.",
        "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-june-12-grab-in-game-rewards-for-free-71686531123826.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/12/1600x900/e550be0c037dcef6cedbfd875a46491ajpg_1_1686531256284_1686531256509.jpg",
        "publishedAt": "2023-06-12T00:55:05Z",
        "content": "Garena Free Fire MAX Redeem Codes for June 12: Garena Free Fire MAX has announced a collaboration with the upcoming film Spider-Man: Across the Spider-Verse. As part of this crossover, players can gr… [+2044 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Ritu Maria Johny",
        "title": "US restaurant launches 'Modi ji thali’ ahead of PM's visit. Watch - Hindustan Times",
        "description": "Chef Shripad Kulkarni, who is of Indian origin, said the thali has been as per the demands of the Indian community staying there. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/pm-modi-us-visit-modi-ji-thali-new-jersey-restaurant-year-of-millet-101686530395089.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/12/1600x900/nvush1hg_-modi-ji-thali_625x300_11_June_23_1686530646065_1686530672122.webp",
        "publishedAt": "2023-06-12T00:51:23Z",
        "content": "A restaurant in New Jersey has curated a special thali in honour of Prime Minister Narendra Modis upcoming visit to the United States, news agency ANI reported. The 'Modi ji thali', prepared by chef … [+2256 chars]"
    }
]


// make function to add data in collection post 


async function addData(){
for(let i=0;i<data.length;i++){
   await db.collection("post").add(data[i]).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });    
}
}


// addData();
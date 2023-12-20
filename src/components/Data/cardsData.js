const cardsData = [
  {
    title: "Milan",
    pic: "./kristy-kravchenko-KI0rFlLc1Ww-unsplash.jpg",
    alt: "Milan Cathedral, with its distinctive Gothic spires, intricate carvings, and magnificent stained glass, stands proudly beneath the clear skies.",
    detailedPic1: "/mikita-yo-ij0zNVUDlDU-unsplash.jpg",
    pic1Alt:
      "Part of the colonnade of Milan Cathedral's architecture showcases intricate details and stunning craftsmanship, creating an awe-inspiring atmosphere for visitors.",
    detailedPic2: "/ouael-ben-salah-nN5DRGC7Oe4-unsplash.jpg",
    pic2Alt:
      "In a square, directly facing the entrance of the cathedral, visitors can admire the grandeur and architectural beauty of Milan Cathedral.",
    detailedPic3: "/eugene-chystiakov-Qj_mxwgnw-Y-unsplash.jpg",
    pic3Alt:
      "The interior of the classical church features a soaring open space that attracts numerous visitors.",
    text: "Milan is a city where rich history, modern elegance, and artistic expression converge.",
    location: "Non United States",
    detailedLocation: "Northern Italy",
    information:
      "Milan is a city in Northern Italy, regional capital of Lombardy, and the second-most populous city proper in Italy after Rome. The city proper has a population of about 1.4 million, while its metropolitan city has 3.26 million inhabitants.",
  },

  {
    title: "Orlando",
    pic: "./kitera-dent-z4ky2zXIjDM-unsplash.jpg",
    alt: "The Disney castle features a light blue spire and a cream-colored exterior.",
    detailedPic1: "/hector-vasquez-vVRGc5JWvIo-unsplash.jpg",
    pic1Alt: "The two Mickeys riding in a flower-adorned car, touring around.",
    detailedPic2: "/aditya-vyas-kBkjgAeT5r4-unsplash.jpg",
    pic2Alt:
      "Universal Studios logo features a globe encircled by the brand's iconic emblem.",
    detailedPic3: "/colin-lloyd-UoXR1Avp3t8-unsplash.jpg",
    pic3Alt:
      "A giant Ferris wheel stands tall against the backdrop of a scenic water feature, surrounded by a ring of fountains.",
    text: "Orlando is a city where imagination comes to life, offering a perfect blend of world-class entertainment, natural beauty, and cultural experiences.",
    location: "United States",
    detailedLocation: "Florida, USA",
    information:
      "Orlando is one of the most-visited cities in the world primarily due to tourism, major events, and convention traffic. It is the third-most visited city in the U.S. after New York City and Miami, with over 2.9 million visitors as of 2022. Orlando International Airport is the 13th-busiest airport in the United States and the 29th-busiest in the world.",
  },
  {
    title: "Seattle",
    pic: "./henry-orr-ubCkx4HyyeA-unsplash.jpg",
    alt: "The Space Needle, a symbol of Seattle, Washington, is an iconic observation tower known for its futuristic design. ",
    detailedPic1: "/haut-risque-3WqzE236Hhw-unsplash.jpg",
    pic1Alt:
      "A person wearing a white jacket and black pants is skiing on a snow-covered mountain.",
    detailedPic2: "/samantha-sun-NsSaVJuqZiU-unsplash.jpg",
    pic2Alt:
      "Overlooking Seattle's landmarks, including Pike Place Market and the Ferris wheel.",
    detailedPic3: "/celine-lityo-zZDbTN_hZPA-unsplash.jpg",
    pic3Alt:
      "The cherry blossoms in full bloom at the University of Washington.",
    text: "Seattle combines a rich cultural scene with stunning natural beauty, making it a destination that caters to a variety of interests.",
    location: "United States",
    detailedLocation: "Washington, USA",
    information:
      "Seattle is situated on an isthmus between Puget Sound (an inlet of the Pacific Ocean) and Lake Washington. It is the northernmost major city in the United States, located about 100 miles (160 km) south of the Canadian border. A major gateway for trade with East Asia, the Port of Seattle is the fourth-largest port in North America in terms of container handling as of 2021.",
  },
  {
    title: "New York City",
    pic: "./laurenz-heymann-TqNH_lVBvn8-unsplash.jpg",
    alt: "View of the Manhattan Bridge framed between two buildings.",
    detailedPic1: "/reno-laithienne--WU3Xcoajis-unsplash.jpg",
    pic1Alt: "Frontal view of the Statue of Liberty.",
    detailedPic2: "/colton-duke-JJFoy0BpqLk-unsplash.jpg",
    pic2Alt:
      "Brooklyn Bridge, is characterized by its iconic neo-Gothic towers and a web of iron cables",
    detailedPic3: "/alex-presa-V37xFHSTca8-unsplash.jpg",
    pic3Alt:
      "The Flatiron Building, located in the bustling Madison Square district of Manhattan, is an iconic skyscraper renowned for its distinctive triangular shape. ",
    text: "New York City is a melting pot of culture, art, cuisine, and history.",
    location: "United States",
    detailedLocation: "New York, USA",
    information:
      "New York, often called New York City or simply NYC, is the most populous city in the United States located at the southern tip of New York State on one of the world's largest natural harbors.",
  },
  {
    title: "Paris",
    pic: "./alex-azabache-ajCgFIIMKck-unsplash.jpg",
    alt: "Standing between two buildings, the view opens up to reveal the magnificent Eiffel Tower in the heart of Paris. ",
    detailedPic1: "/jeff-frenette-NLrBr0KQRLg-unsplash.jpg",
    pic1Alt:
      "A tranquil winter street: pink and white houses on the left, snowy trees on the right. A serene escape into the charm of winter.",
    detailedPic2: "/cyril-mzn-Z28L9_l4SbQ-unsplash.jpg",
    pic2Alt: "View of the Arc de Triomphe from the right side, under a tree.",
    detailedPic3: "/louis-paulin-hoyM4lFB8S0-unsplash.jpg",
    pic3Alt: "Direct view of a majestic church from a bridge.",
    text: "Paris, with its timeless elegance and romantic ambiance, captivates visitors with its rich history, art, and culinary excellence.",
    location: "Non United States",
    detailedLocation: "France",
    information:
      "Paris is the capital and most populous city of France. Paris is the fifth-most populated city in the European Union and the 30th most densely populated city in the world in 2022.",
  },
  {
    title: "San Francisco",
    pic: "./ramiro-checchi-BpN4qo98j-Y-unsplash.jpg",
    alt: "Upward view of the Golden Gate Bridge.",
    detailedPic1: "/rich-hay-V0YpBGGk-_A-unsplash.jpg",
    pic1Alt:
      "Viewing Bay Bridge through its diamond-shaped center, offering a unique perspective from both front and above.",
    detailedPic2: "/fran-3RvR89qQ5i0-unsplash.jpg",
    pic2Alt:
      "Gazing up at the Ferry Building tower reveals its impressive spire against the backdrop of Bay Bridge and the scenic bay area.",
    detailedPic3: "/rich-hay-asBop7FTWVY-unsplash.jpg",
    pic3Alt:
      "The Palace of Fine Arts is a stunning architectural gem nestled in a park in San Francisco.",
    text: "San Francisco, with its diverse neighborhoods, stunning landscapes, and rich cultural offerings, is a city that captures the hearts of visitors. ",
    location: "United States",
    detailedLocation: "California, USA",
    information:
      "San Francisco, officially the City and County of San Francisco, is the commercial, financial, and cultural center of Northern California. The city proper is the fourth most populous city in California, with 808,437 residents, and the 17th most populous city in the United States as of 2022.",
  },
  {
    title: "Osaka",
    pic: "./nomadic-julien-zDRO6ztMAHA-unsplash.jpg",
    alt: "Osaka's bustling city center, under the radiant sunlight.",
    detailedPic1: "/han-min-t-gmCbP56V1ts-unsplash.jpg",
    pic1Alt:
      "Viewing Osaka Castle from Below: Majestic Stone Walls and the Unique Golden Castle",
    detailedPic2: "/nomadic-julien-GrzSfB-jAOU-unsplash.jpg",
    pic2Alt:
      "Overlooking Osaka Castle from the Bridge at Castle Park: A Blossom-Filled Oasis",
    detailedPic3: "/romeo-a-G-6Yn0X05Lw-unsplash.jpg",
    pic3Alt:
      "Kuromon Market, located in Chuo Ward, Osaka, is a renowned marketplace famous for its fresh produce, seafood, and a variety of delectable snacks.",
    text: "Osaka's dynamic blend of modernity and tradition, coupled with its reputation as the Kitchen of Japan, makes it a must-visit destination. ",
    location: "Non United States",
    detailedLocation: "Japan",
    information:
      "Osaka is a designated city in the Kansai region of Honshu in Japan, and one of the three major cities of Japan (Tokyo-Osaka-Nagoya). It is the capital of and most populous city in Osaka Prefecture, and the third most populous city in Japan, following the special wards of Tokyo and Yokohama. With a population of 2.7 million in the 2020 census, it is also the largest component of the Keihanshin Metropolitan Area, which is the second-largest metropolitan area in Japan and the 10th largest urban area in the world with more than 19 million inhabitants.",
  },
  {
    title: "Miami",
    pic: "./jason-briscoe-_kh-b5dJ_Yk-unsplash.jpg",
    alt: "Endless coastline in Miami.",
    detailedPic1: "/jonne-WxINAr9WVaQ-unsplash.jpg",
    pic1Alt: "A cruise ship docked along a shore lined with coconut trees.",
    detailedPic2: "/guzman-barquin-txZsxZJNxnw-unsplash.jpg",
    pic2Alt:
      "A standalone house with alternating blue and orange colors by the seaside.",
    detailedPic3: "/lance-asper-pAWY7xrsLwc-unsplash.jpg",
    pic3Alt:
      "An overhead view of a coastal highway, with a beach on one side and houses on the other.",
    text: "Miami's vibrant energy, diverse neighborhoods, and a perfect blend of beachy relaxation and lively entertainment make it a top destination. ",
    location: "United States",
    detailedLocation: "Florida, USA",
    information:
      "Miami is split roughly into north, south, west, and Downtown areas. The heart of the city is Downtown Miami, which is on the eastern side and includes the neighborhoods of Brickell, Virginia Key, Watson Island, as well as PortMiami.",
  },
  {
    title: "San Diego",
    pic: "./andres-garcia-3_ROcQaL1uw-unsplash.jpg",
    alt: "Looking out over a beach in San Diego.",
    detailedPic1: "/kristen-colada-adams-XgKJr1Y5B-g-unsplash.jpg",
    pic1Alt: "Balboa Park's church spire.",
    detailedPic2: "/levan-badzgaradze-xoeljsx5CD4-unsplash.jpg",
    pic2Alt:
      "A sea of orange and white flowers, with distant, rolling mountains.",
    detailedPic3: "/roman-gomez-zmQ5xUa3cRk-unsplash.jpg",
    pic3Alt: "The beach at sunset, with many people enjoying the surf.",
    text: "San Diego's diverse neighborhoods, outdoor adventures, and family-friendly attractions make it a perfect destination for all types of travelers. ",
    location: "United States",
    detailedLocation: "California, USA",
    information:
      "San Diego is a city in the U.S. state of California located alongside the Pacific Ocean in Southern California. With a population of over 1.3 million residents, the city is the eighth-most populous in the United States and the second-most populous in California after Los Angeles.",
  },
  {
    title: "Los Angeles",
    pic: "./juliette-contin-T-nr2QEbab0-unsplash.jpg",
    alt: "View through three coconut trees to a small white beachside house.",
    detailedPic1: "/cedric-dhaenens-qgXzAPdXQjA-unsplash.jpg",
    pic1Alt:
      "The upper right part of the Ferris wheel, featuring orange and red cabins.",
    detailedPic2: "/gabe-VJ5i5ARz6jc-unsplash.jpg",
    pic2Alt: "The iconic white Hollywood sign perched on the green hills.",
    detailedPic3: "/aurelie-peche-iBEDHJVSmKc-unsplash.jpg",
    pic3Alt:
      "A square filled with many coconut trees, where many people are skateboarding.",
    text: "Los Angeles, with its glamorous attractions, cultural diversity, and coastal charm, offers a myriad of experiences for every type of traveler. ",
    location: "United States",
    detailedLocation: "California, USA",
    information:
      "Los Angeles, often referred to by its initials L.A., officially the City of Los Angeles, is the most populous city in the U.S. state of California. With roughly 3.9 million residents within the city limits as of 2020, Los Angeles is the second-most populous city in the United States, behind only New York City; it is the commercial, financial and cultural center of the Southern California region. Los Angeles has a Mediterranean climate, an ethnically and culturally diverse population, in addition to a sprawling metropolitan area.",
  },
  {
    title: "Switzerland",
    pic: "./nolan-di-meo-pT7Zg368Sks-unsplash.jpg",
    alt: "Gazing through a group of sloping-roof houses, you can see the distant snow-capped mountains.",
    detailedPic1: "/ricardo-gomez-angel-J82dSkOxvY8-unsplash.jpg",
    pic1Alt:
      "Scattered across the expansive grassy slope are several houses, with mountains in the distance.",
    detailedPic2: "/david-ramos-yYZVWVZMcIo-unsplash.jpg",
    pic2Alt:
      "The grassy slope at the foot of the mountain is lush green, with houses featuring sloped roofs in the foreground.",
    detailedPic3: "/leo-CAwqlbtJ3uw-unsplash.jpg",
    pic3Alt:
      "Between the mountain ranges on the left and right, there is a long grassy slope, and on the right side of the mountain, a waterfall cascades down.",
    text: "Switzerland, with its blend of natural beauty, cultural richness, and outdoor adventures, offers a unique and unforgettable travel experience. ",
    location: "Non United States",
    detailedLocation: "Europe",
    information:
      "Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east.",
  },
  {
    title: "Sri Lanka",
    pic: "./raissa-lara-lutolf-fasel-oeSxCPt3P7U-unsplash.jpg",
    alt: "A house stands beneath a group of coconut trees, and a Sri Lankan woman is standing in front of the house.",
    detailedPic1: "/chaminda-keragala-Hp2LhkqyHww-unsplash.jpg",
    pic1Alt: "There are beach chairs and umbrellas by the seaside.",
    detailedPic2: "/egle-sidaraviciute-TsyNiYziKiQ-unsplash.jpg",
    pic2Alt: "A blue mountain train travels on the mountainside.",
    detailedPic3: "/pius-martin-neHp-VCgtNY-unsplash.jpg",
    pic3Alt: "A fruit stall with a variety of fruits.",
    text: "Sri Lanka offers a blend of cultural richness and natural beauty. Enjoy your journey in this tropical paradise!",
    location: "Non United States",
    detailedLocation: "South Asia",
    information:
      "Sri Lanka is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait.",
  },
];

export default cardsData;

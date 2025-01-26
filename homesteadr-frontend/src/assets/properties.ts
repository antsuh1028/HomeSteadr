import { CityResult } from "../../../homesteadr-backend/types/types";
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_JOSE_GOOGLE_KEY;

export const properties1: CityResult[] = [{
    "city": "Abilene, TX",
    "data": {
        "0": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1752%20Bent%20Tree%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 324900,
            "squareFeet": 2850,  // Adjusted from 1219680000
            "address": "1752 Bent Tree Dr",
            "geolocation": {
                "lat": "32.428070",
                "long": "-99.714920"
            },
            "type": "SINGLE FAMILY RESIDENCE"
        },
        "1": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=4400%20Ridgemont%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 2100000,
            "squareFeet": 6500,  // Adjusted from 5429536200
            "address": "4400 Ridgemont Dr",
            "geolocation": {
                "lat": "32.397745017",
                "long": "-99.764566658"
            }
        },
        "2": {
            "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-99.758660,32.465540,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
            "price": 119500,  // Adjusted from 1195
            "squareFeet": 1450,  // Adjusted
            "address": "1441 Brg Ave",
            "geolocation": {
                "lat": "32.465540",
                "long": "-99.758660"
            }
        },
        "3": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=118%20Five%20Oaks%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 199900,
            "squareFeet": 1850,  // Adjusted from 82764
            "address": "118 Five Oaks Rd",
            "geolocation": {
                "lat": "32.374640000",
                "long": "-99.815155000"
            },
            "type": "SINGLE FAMILY RESIDENCE"
        },
        "4": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7002%20Maryland%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 418000,
            "squareFeet": 3200,  // Adjusted from 19839968280
            "address": "7002 Maryland St",
            "geolocation": {
                "lat": "32.414664841",
                "long": "-99.818178760"
            }
        }
    }
},
{
    "city": "Dallas-Fort Worth, TX",
    "data": {
        "0": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3711%20Wendelkin%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 247500,
            "squareFeet": 2100,  // Adjusted from 333974520
            "address": "3711 Wendelkin St",
            "geolocation": {
                "lat": "32.756950",
                "long": "-96.769500"
            }
        },
        "1": {
            "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-80.106363,26.102928,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
            "price": 1100000,
            "squareFeet": 4200,  // Adjusted from 54929160
            "address": "1586 S Ocean Ln Unit 125",
            "geolocation": {
                "lat": "26.102928",
                "long": "-80.106363"
            }
        },
        "2": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7507%20Arthurs%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 160000,
            "squareFeet": 1450,  // Adjusted
            "address": "7507 Arthurs Rd",
            "geolocation": {
                "lat": "27.53269",
                "long": "-80.40134"
            }
        },
        "3": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7417%20Gairlock%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 995050,
            "squareFeet": 4500,  // Adjusted from 26800
            "address": "7417 Gairlock Dr",
            "geolocation": {
                "lat": "32.871170",
                "long": "-97.414350"
            }
        },
        "4": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=5517%20WINTON%20ST&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 995000,
            "squareFeet": 4800,  // Adjusted
            "address": "5517 WINTON ST",
            "geolocation": {
                "lat": "32.835869000",
                "long": "-96.773035000"
            }
        }
    }
},
{
    "city": "Austin, TX",
    "data": {
        "0": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=606%20Guadalupe%20St%20Unit%20B5-25&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 892900,  // Adjusted from 8929
            "squareFeet": 1200,  // Added missing value
            "address": "606 Guadalupe St Unit B5-25",
            "geolocation": {
                "lat": "30.2695403",
                "long": "-97.7462757"
            }
        },
        "1": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=9103%20Towana%20Trl&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 825000,
            "squareFeet": 3800,  // Adjusted from 48787
            "address": "9103 Towana Trl",
            "geolocation": {
                "lat": "30.241629",
                "long": "-97.908861"
            }
        },
        "2": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=11505%20Tedford%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 310000,
            "squareFeet": 2100,  // Adjusted from 860702040
            "address": "11505 Tedford St",
            "geolocation": {
                "lat": "30.383310",
                "long": "-97.683300"
            },
            "type": "SINGLE FAMILY RESIDENCE"
        },
        "3": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=5025%20Mueller%20Blvd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 723300,  // Adjusted from 7233
            "squareFeet": 1500,  // Adjusted
            "address": "5025 Mueller Blvd",
            "geolocation": {
                "lat": "30.3054126",
                "long": "-97.7027116"
            }
        },
        "4": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=500%20N%20Capital%20of%20Texas%20Hwy&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 2338465,
            "squareFeet": 5500,  // Adjusted from 812829.6
            "address": "500 N Capital of Texas Hwy",
            "geolocation": {
                "lat": "30.308693",
                "long": "-97.8272527"
            }
        }
    }
},
{
    "city": "San Antonio, TX",
    "data": {
        "0": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=326%20Linda%20Lou%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 149900,
            "squareFeet": 1350,  // Adjusted from 233394480
            "address": "326 Linda Lou Dr",
            "geolocation": {
                "lat": "29.377690",
                "long": "-98.472000"
            }
        },
        "1": {
            "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-82.293654,28.305958,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
            "price": 510900,
            "squareFeet": 3800,  // Adjusted from 313632000
            "address": "31605 Cardinal Yard Dr",
            "geolocation": {
                "lat": "28.305958",
                "long": "-82.293654"
            }
        },
        "2": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1102%20Two%20Wood%20Way&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 267900,
            "squareFeet": 2200,  // Adjusted from 492881400
            "address": "1102 Two Wood Way",
            "geolocation": {
                "lat": "29.298337",
                "long": "-98.478144"
            },
            "type": "SINGLE FAMILY RESIDENCE"
        },
        "3": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3228%20Loma%20Riviera%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 850000,
            "squareFeet": 4100,  // Adjusted from 406850.39999999997
            "address": "3228 Loma Riviera Dr",
            "geolocation": {
                "lat": "32.75513",
                "long": "-117.2263"
            }
        },
        "4": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1690%20Beck%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 675000,  // Added price
            "squareFeet": 3900,  // Adjusted from 322561800
            "address": "1690 Beck Dr",
            "geolocation": {
                "lat": "37.292350",
                "long": "-121.971610"
            }
        }
    }
},
{
    "city": "Houston, TX",
    "data": {
        "0": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7770%20Springville%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 495000,  // Added price
            "squareFeet": 3200,  // Adjusted from 302959800
            "address": "7770 Springville Dr",
            "geolocation": {
                "lat": "29.894892000",
                "long": "-95.654711000"
            }
        },"1": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=13720%20Hollowgreen%20Dr%20Unit%20706&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 179000,
            "squareFeet": 1250,  // Adjusted from 56889360
            "address": "13720 Hollowgreen Dr Unit 706",
            "geolocation": {
                "lat": "29.731665",
                "long": "-95.632386"
            }
        },
        "2": {
            "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-95.459814000,29.587074000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
            "price": 267720,
            "squareFeet": 2100,  // Adjusted from 287496000
            "address": "4906 Ct Rd",
            "geolocation": {
                "lat": "29.587074000",
                "long": "-95.459814000"
            },
            "type": "SINGLE FAMILY RESIDENCE"
        },
        "3": {
            "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=E%205823%20Fairdale%20Ln%20E&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
            "price": 425000,  // Added price
            "squareFeet": 2800,  // Adjusted from 71307720
            "address": "E 5823 Fairdale Ln E",
            "geolocation": {
                "lat": "29.732902000",
                "long": "-95.481558000"
            }
        },
        "4": {
            "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-95.578445000,30.000701000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
            "price": 385000,  // Added price
            "squareFeet": 2400,  // Added square footage
            "address": "16B 10317 Lake Rd 16B",
            "geolocation": {
                "lat": "30.000701000",
                "long": "-95.578445000"
            }
        }
    }
}];

export const properties2: CityResult[] = [
    {
        "city": "Houston, TX",
        "data": {
            "0": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-95.430468000,30.006135000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 425000,  // Changed from 0
                "squareFeet": 381585600,
                "address": "331 Skywood",
                "geolocation": {
                    "lat": "30.006135000",
                    "long": "-95.430468000"
                }
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=527%20Westford%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 375000,  // Changed from 0
                "squareFeet": 217800000,
                "address": "527 Westford St",
                "geolocation": {
                    "lat": "29.824660999",
                    "long": "-95.366388999"
                }
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=undefined&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 313632,
                "squareFeet": 20908.8,
                "address": "2310 Westheimer Rd",  // Added address
                "geolocation": {
                    "lat": "29.9388088",
                    "long": "-95.3373551"
                }
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2551%20Anchor%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 445000,  // Changed from 0
                "squareFeet": 234135000,
                "address": "2551 Anchor St",
                "geolocation": {
                    "lat": "29.863679999",
                    "long": "-95.451351000"
                }
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=14522%20Hiram%20Clarke%20Rd%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 385000,  // Changed from 0
                "squareFeet": 453546720,
                "address": "14522 Hiram Clarke Rd Rd",
                "geolocation": {
                    "lat": "29.614882000",
                    "long": "-95.446271000"
                }
            }
        }
    },
    {
        "city": "Austin, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=4229%20N%20FM%20620&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 193000,
                "squareFeet": 236530.8,
                "address": "4229 N FM 620",
                "geolocation": {
                    "lat": "30.3955651",
                    "long": "-97.9159239"
                }
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=8801%20Wall%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 525000,  // Changed from 0
                "squareFeet": 2800,  // Changed from 0
                "address": "8801 Wall St",
                "geolocation": {
                    "lat": "30.3401045",
                    "long": "-97.6696475"
                }
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=9101%20Wall%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 675000,  // Changed from 0
                "squareFeet": 17397341280,
                "address": "9101 Wall St",
                "geolocation": {
                    "lat": "30.343619030",
                    "long": "-97.667271640"
                }
            },
            "3": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-97.8857515,30.2618868,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 3000000,
                "squareFeet": 470448.00000000006,
                "address": "8700 Southwest Pkwy",
                "geolocation": {
                    "lat": "30.2618868",
                    "long": "-97.8857515"
                }
            },
            "4": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-97.680183,30.290344,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 595000,
                "squareFeet": 3200,  // Changed from 0
                "address": "B2 Pecan Spgs RD",
                "geolocation": {
                    "lat": "30.290344",
                    "long": "-97.680183"
                }
            }
        }
    }
];


export const properties3: CityResult[] = [
    {
        "city": "Abilene, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1752%20Bent%20Tree%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 324900,
                "squareFeet": 2850,
                "address": "1752 Bent Tree Dr",
                "geolocation": {
                    "lat": "32.428070",
                    "long": "-99.714920"
                },
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=4400%20Ridgemont%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 2100000,
                "squareFeet": 6500,
                "address": "4400 Ridgemont Dr",
                "geolocation": {
                    "lat": "32.397745017",
                    "long": "-99.764566658"
                }
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-99.758660,32.465540,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 119500,
                "squareFeet": 1450,
                "address": "1441 Brg Ave",
                "geolocation": {
                    "lat": "32.465540",
                    "long": "-99.758660"
                }
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=118%20Five%20Oaks%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 199900,
                "squareFeet": 1850,
                "address": "118 Five Oaks Rd",
                "geolocation": {
                    "lat": "32.374640000",
                    "long": "-99.815155000"
                },
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7002%20Maryland%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 418000,
                "squareFeet": 3200,
                "address": "7002 Maryland St",
                "geolocation": {
                    "lat": "32.414664841",
                    "long": "-99.818178760"
                }
            }
        }
    },
    {
        "city": "Dallas-Fort Worth, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3711%20Wendelkin%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 247500,
                "squareFeet": 2100,
                "address": "3711 Wendelkin St",
                "geolocation": {
                    "lat": "32.756950",
                    "long": "-96.769500"
                }
            },
            "1": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-80.106363,26.102928,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 1100000,
                "squareFeet": 4200,
                "address": "1586 S Ocean Ln Unit 125",
                "geolocation": {
                    "lat": "26.102928",
                    "long": "-80.106363"
                }
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7507%20Arthurs%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 160000,
                "squareFeet": 1450,
                "address": "7507 Arthurs Rd",
                "geolocation": {
                    "lat": "27.53269",
                    "long": "-80.40134"
                }
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7417%20Gairlock%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 595000,
                "squareFeet": 3500,
                "address": "7417 Gairlock Dr",
                "geolocation": {
                    "lat": "32.871170",
                    "long": "-97.414350"
                }
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=5517%20WINTON%20ST&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 995000,
                "squareFeet": 4800,
                "address": "5517 WINTON ST",
                "geolocation": {
                    "lat": "32.835869000",
                    "long": "-96.773035000"
                }
            }
        }
    },
    {
        "city": "Austin, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=606%20Guadalupe%20St%20Unit%20B5-25&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 892900,
                "squareFeet": 1200,
                "address": "606 Guadalupe St Unit B5-25",
                "geolocation": {
                    "lat": "30.2695403",
                    "long": "-97.7462757"
                }
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=9103%20Towana%20Trl&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 825000,
                "squareFeet": 3800,
                "address": "9103 Towana Trl",
                "geolocation": {
                    "lat": "30.241629",
                    "long": "-97.908861"
                }
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=11505%20Tedford%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 310000,
                "squareFeet": 2100,
                "address": "11505 Tedford St",
                "geolocation": {
                    "lat": "30.383310",
                    "long": "-97.683300"
                },
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=5025%20Mueller%20Blvd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 723300,
                "squareFeet": 1500,
                "address": "5025 Mueller Blvd",
                "geolocation": {
                    "lat": "30.3054126",
                    "long": "-97.7027116"
                }
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=500%20N%20Capital%20of%20Texas%20Hwy&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 2338465,
                "squareFeet": 5500,
                "address": "500 N Capital of Texas Hwy",
                "geolocation": {
                    "lat": "30.308693",
                    "long": "-97.8272527"
                }
            }
        }
    },
    {
        "city": "San Antonio, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=326%20Linda%20Lou%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 149900,
                "squareFeet": 1350,
                "address": "326 Linda Lou Dr",
                "geolocation": {
                    "lat": "29.377690",
                    "long": "-98.472000"
                }
            },
            "1": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-82.293654,28.305958,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 510900,
                "squareFeet": 3800,
                "address": "31605 Cardinal Yard Dr",
                "geolocation": {
                    "lat": "28.305958",
                    "long": "-82.293654"
                }
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1102%20Two%20Wood%20Way&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 267900,
                "squareFeet": 2200,
                "address": "1102 Two Wood Way",
                "geolocation": {
                    "lat": "29.298337",
                    "long": "-98.478144"
                },
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3228%20Loma%20Riviera%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 850000,
                "squareFeet": 4100,
                "address": "3228 Loma Riviera Dr",
                "geolocation": {
                    "lat": "32.75513",
                    "long": "-117.2263"
                }
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1690%20Beck%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 675000,
                "squareFeet": 3900,
                "address": "1690 Beck Dr",
                "geolocation": {
                    "lat": "37.292350",
                    "long": "-121.971610"
                }
            }
        }
    },
    {
        "city": "Houston, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7770%20Springville%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 495000,
                "squareFeet": 3200,
                "address": "7770 Springville Dr",
                "geolocation": {
                    "lat": "29.894892000",
                    "long": "-95.654711000"
                }
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=13720%20Hollowgreen%20Dr%20Unit%20706&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 179000,
                "squareFeet": 1250,
                "address": "13720 Hollowgreen Dr Unit 706",
                "geolocation": {
                    "lat": "29.731665",
                    "long": "-95.632386"
                }
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-95.459814000,29.587074000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 267720,
                "squareFeet": 2100,
                "address": "4906 Ct Rd",
                "geolocation": {
                    "lat": "29.587074000",
                    "long": "-95.459814000"
                },
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=E%205823%20Fairdale%20Ln%20E&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 425000,
                "squareFeet": 2800,
                "address": "E 5823 Fairdale Ln E",
                "geolocation": {
                    "lat": "29.732902000",
                    "long": "-95.481558000"
                }
            },
            "4": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-95.578445000,30.000701000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 385000,
                "squareFeet": 2400,
                "address": "16B 10317 Lake Rd 16B",
                "geolocation": {
                    "lat": "30.000701000",
                    "long": "-95.578445000"
                }
            }
        }
    }
];

export const properties5: CityResult[] = [
    {
        "city": "Irving, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1202%20HILBURN%20CT&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 192840,
                "squareFeet": 1850,
                "address": "1202 HILBURN CT",
                "geolocation": {"lat": "32.800587", "long": "-96.928035"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=7843%20Southfork%20Bnd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 210000,
                "squareFeet": 1250,
                "address": "7843 Southfork Bnd",
                "geolocation": {"lat": "32.929370", "long": "-96.949570"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-96.967338,32.8844911,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 525000,
                "squareFeet": 3200,
                "address": "1200 W Walnut Hl Ln",
                "geolocation": {"lat": "32.8844911", "long": "-96.967338"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=4025%20W%20Rochelle%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 285000,
                "squareFeet": 1850,
                "address": "4025 W Rochelle Rd",
                "geolocation": {"lat": "32.846560", "long": "-97.005060"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3617%20HIDALGO%20ST&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 692132,
                "squareFeet": 3800,
                "address": "3617 HIDALGO ST",
                "geolocation": {"lat": "32.853133999", "long": "-96.940040999"}
            }
        }
    },
    {
        "city": "Dallas-Fort Worth, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1336%20Crampton%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 358153,
                "squareFeet": 2400,
                "address": "1336 Crampton St",
                "geolocation": {"lat": "32.800140", "long": "-96.839620"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2841%20N%20Ocean%20Blvd%20Unit%20303&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 395000,
                "squareFeet": 1800,
                "address": "2841 N Ocean Blvd Unit 303",
                "geolocation": {"lat": "26.162530", "long": "-80.100540"}
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1340%20Cordova%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 2199000,
                "squareFeet": 5200,
                "address": "1340 Cordova Rd",
                "geolocation": {"lat": "26.105440", "long": "-80.129320"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=5120%20Cedar%20Spgs%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 825000,
                "squareFeet": 4100,
                "address": "5120 Cedar Spgs Dr",
                "geolocation": {"lat": "32.883246", "long": "-97.401263999"}
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3700%20Galt%20Ocean%20Dr%20Unit%201106&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 465000,
                "squareFeet": 1650,
                "address": "3700 Galt Ocean Dr Unit 1106",
                "geolocation": {"lat": "26.173790", "long": "-80.098590"}
            }
        }
    },
    {
        "city": "Red Oak, TX",
        "data": {
            "0": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-74.073629,40.354008,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 325000,
                "squareFeet": 2200,
                "address": "122 Bodman Pl",
                "geolocation": {"lat": "40.354008", "long": "-74.073629"}
            },
            "1": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-96.82566,32.52806,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 223999,
                "squareFeet": 1850,
                "address": "200 Overlook Dr",
                "geolocation": {"lat": "32.52806", "long": "-96.82566"}
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=undefined&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 275000,
                "squareFeet": 1950,
                "address": "405 Red Oak Lane",
                "geolocation": {"lat": "45.2127448", "long": "-109.2487898"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=800%20Rio%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 100000,
                "squareFeet": 1100,
                "address": "800 Rio St",
                "geolocation": {"lat": "40.179202", "long": "-122.234210"}
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=46%20Drummond%20Ave&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 500000,
                "squareFeet": 2800,
                "address": "46 Drummond Ave",
                "geolocation": {"lat": "40.338550", "long": "-74.072627"}
            }
        }
    }
];

export const properties6: CityResult[] = [
    {
        "city": "Abilene, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=702%20N%202nd%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 275000,
                "squareFeet": 2100,
                "address": "702 N 2nd St",
                "geolocation": {"lat": "32.4504421", "long": "-99.7293917"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2870%20Shere%20Lynne%20Ln&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 247990,
                "squareFeet": 1950,
                "address": "2870 Shere Lynne Ln",
                "geolocation": {"lat": "32.420973", "long": "-99.799919"}
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2333%20S%2035th%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 234900,
                "squareFeet": 1850,
                "address": "2333 S 35th St",
                "geolocation": {"lat": "32.408450", "long": "-99.752250"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1733%20Marshall%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 135947,
                "squareFeet": 1450,
                "address": "1733 Marshall St",
                "geolocation": {"lat": "32.427910", "long": "-99.754610"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1701%20Denali%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 1751548,
                "squareFeet": 5200,
                "address": "1701 Denali Dr",
                "geolocation": {"lat": "32.365999193", "long": "-99.742706158"}
            }
        }
    },
    {
        "city": "Dallas, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2702%20MILLMAR%20DR&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 164346,
                "squareFeet": 1650,
                "address": "2702 MILLMAR DR",
                "geolocation": {"lat": "32.826597", "long": "-96.667904"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1336%20Crampton%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 358153,
                "squareFeet": 2400,
                "address": "1336 Crampton St",
                "geolocation": {"lat": "32.800140", "long": "-96.839620"}
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-96.800943000,32.961497000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 770000,
                "squareFeet": 3900,
                "address": "6107 Bluff Pt Dr",
                "geolocation": {"lat": "32.961497000", "long": "-96.800943000"}
            },
            "3": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/undefined,undefined,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 295000,
                "squareFeet": 1800,
                "address": "PO BOX 803467",
                "geolocation": {"lat": "32.825000", "long": "-96.825000"}
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3840%20Castle%20Hls%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 224500,
                "squareFeet": 1750,
                "address": "3840 Castle Hls Dr",
                "geolocation": {"lat": "32.679094000", "long": "-96.759136000"}
            }
        }
    }
];

export const properties8: CityResult[] = [
    {
        "city": "Red Oak, TX",
        "data": {
            "0": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-73.909249,41.97874,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 795000,
                "squareFeet": 4200,
                "address": "3974 Rte 9G",
                "geolocation": {"lat": "41.97874", "long": "-73.909249"}
            },
            "1": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-74.073629,40.354008,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 325000,
                "squareFeet": 2200,
                "address": "122 Bodman Pl",
                "geolocation": {"lat": "40.354008", "long": "-74.073629"}
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-96.82566,32.52806,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 223999,
                "squareFeet": 1850,
                "address": "200 Overlook Dr",
                "geolocation": {"lat": "32.52806", "long": "-96.82566"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=undefined&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 275000,
                "squareFeet": 1950,
                "address": "405 Red Oak Lane",
                "geolocation": {"lat": "45.2127448", "long": "-109.2487898"}
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=800%20Rio%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 100000,
                "squareFeet": 1100,
                "address": "800 Rio St",
                "geolocation": {"lat": "40.179202", "long": "-122.234210"}
            }
        }
    },
    {
        "city": "Dallas, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=13330%20Noel%20Rd%20Unit%20b6&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 160400,
                "squareFeet": 850,
                "address": "13330 Noel Rd Unit b6",
                "geolocation": {"lat": "32.9293921", "long": "-96.8177777"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=911%20VALDEZ%20DR&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 385000,
                "squareFeet": 2400,
                "address": "911 VALDEZ DR",
                "geolocation": {"lat": "32.699615000", "long": "-96.598172000"}
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2702%20MILLMAR%20DR&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 164346,
                "squareFeet": 1650,
                "address": "2702 MILLMAR DR",
                "geolocation": {"lat": "32.826597", "long": "-96.667904"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1217%20Eagle%20Mtn%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 299000,
                "squareFeet": 1800,
                "address": "1217 Eagle Mtn Dr",
                "geolocation": {"lat": "32.691200", "long": "-96.559441"}
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1336%20Crampton%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 358153,
                "squareFeet": 2400,
                "address": "1336 Crampton St",
                "geolocation": {"lat": "32.800140", "long": "-96.839620"}
            }
        }
    }
];

export const properties9: CityResult[] = [
    {
        "city": "Austin, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1604%20Barclay%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 4895000,
                "squareFeet": 7200,
                "address": "1604 Barclay Dr",
                "geolocation": {"lat": "30.2771347", "long": "-97.8259387"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2%20Inwood%20Cv&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 5999950,
                "squareFeet": 8500,
                "address": "2 Inwood Cv",
                "geolocation": {"lat": "30.272757", "long": "-97.785965"}
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-97.767941,30.386094,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 958990,
                "squareFeet": 3500,
                "address": "Plan 223 Sales Trailer Leaning Rock",
                "geolocation": {"lat": "30.386094", "long": "-97.767941"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=900%20River%20Oaks%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 440000,
                "squareFeet": 2400,
                "address": "900 River Oaks Dr",
                "geolocation": {"lat": "30.385465", "long": "-97.667720"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=Vesper%20A13%20East%20AVE&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 750000,
                "squareFeet": 2900,
                "address": "Vesper A13 East AVE",
                "geolocation": {"lat": "30.259747", "long": "-97.737612"}
            }
        }
    },
    {
        "city": "Dallas, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=911%20VALDEZ%20DR&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 385000,
                "squareFeet": 2400,
                "address": "911 VALDEZ DR",
                "geolocation": {"lat": "32.699615000", "long": "-96.598172000"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2702%20MILLMAR%20DR&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 164346,
                "squareFeet": 1650,
                "address": "2702 MILLMAR DR",
                "geolocation": {"lat": "32.826597", "long": "-96.667904"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1217%20Eagle%20Mtn%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 299000,
                "squareFeet": 1800,
                "address": "1217 Eagle Mtn Dr",
                "geolocation": {"lat": "32.691200", "long": "-96.559441"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1336%20Crampton%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 358153,
                "squareFeet": 2400,
                "address": "1336 Crampton St",
                "geolocation": {"lat": "32.800140", "long": "-96.839620"}
            },
            "4": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-96.800943000,32.961497000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 770000,
                "squareFeet": 3900,
                "address": "6107 Bluff Pt Dr",
                "geolocation": {"lat": "32.961497000", "long": "-96.800943000"}
            }
        }
    },
    {
        "city": "Houston, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=711%20Cordell%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 189500,
                "squareFeet": 1650,
                "address": "711 Cordell St",
                "geolocation": {"lat": "29.797881000", "long": "-95.374780000"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=B%201222%20W%2017th%20St%20B&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 275000,
                "squareFeet": 1800,
                "address": "B 1222 W 17th St B",
                "geolocation": {"lat": "29.800265000", "long": "-95.420912000"}
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-95.430785000,29.670987000,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 480000,
                "squareFeet": 2800,
                "address": "3403 Knighton Hl Dr",
                "geolocation": {"lat": "29.670987000", "long": "-95.430785000"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=3312%20University%20Blvd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 2427600,
                "squareFeet": 6200,
                "address": "3312 University Blvd",
                "geolocation": {"lat": "29.715294", "long": "-95.429277999"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=11607%20Henley%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 525000,
                "squareFeet": 3100,
                "address": "11607 Henley Dr",
                "geolocation": {"lat": "29.940610000", "long": "-95.566575000"}
            }
        }
    },
    {
        "city": "San Antonio, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2235%20Abacus%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 166400,
                "squareFeet": 1550,
                "address": "2235 Abacus St",
                "geolocation": {"lat": "29.333940", "long": "-98.547410"}
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=1950%20Southwest%20Loop%20410%20Unit%203&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 129900,
                "squareFeet": 950,
                "address": "1950 Southwest Loop 410 Unit 3",
                "geolocation": {"lat": "29.414009", "long": "-98.648736"}
            },
            "2": {
                "pictureUrl": "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-98.465,29.42189,17,0/400x300?access_token=pk.eyJ1Ijoiam9zZWdvbnoxMTUiLCJhIjoiY202ZGE3bTJkMHNjODJ4cHd5MjRmc2tmaCJ9.wLefCyArWkUH7FZlm-uuyA",
                "price": 390000,
                "squareFeet": 2400,
                "address": "1006 Ctr St",
                "geolocation": {"lat": "29.42189", "long": "-98.465"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2101%20Abacus%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 199400,
                "squareFeet": 1800,
                "address": "2101 Abacus St",
                "geolocation": {"lat": "29.334040", "long": "-98.543640"}
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2203%20Abacus%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 185000,
                "squareFeet": 1650,
                "address": "2203 Abacus St",
                "geolocation": {"lat": "29.334270", "long": "-98.544891"}
            }
        }
    }
];

export const properties10: CityResult[] = [
    {
        "city": "Abilene, TX",
        "data": {
            "0": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=346%20Hog%20Eye%20Rd&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 325920,
                "squareFeet": 2100,
                "address": "346 Hog Eye Rd",
                "geolocation": {"lat": "32.325288000", "long": "-99.698038000"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "1": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=702%20N%202nd%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 378990,
                "squareFeet": 2600,
                "address": "702 N 2nd St",
                "geolocation": {"lat": "32.4504421", "long": "-99.7293917"}
            },
            "2": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2870%20Shere%20Lynne%20Ln&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 247990,
                "squareFeet": 1950,
                "address": "2870 Shere Lynne Ln",
                "geolocation": {"lat": "32.420973", "long": "-99.799919"}
            },
            "3": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=826%20Eastover%20Dr&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 209994,
                "squareFeet": 1850,
                "address": "826 Eastover Dr",
                "geolocation": {"lat": "32.451610", "long": "-99.710950"},
                "type": "SINGLE FAMILY RESIDENCE"
            },
            "4": {
                "pictureUrl": `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=2333%20S%2035th%20St&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`,
                "price": 234900,
                "squareFeet": 1900,
                "address": "2333 S 35th St",
                "geolocation": {"lat": "32.408450", "long": "-99.752250"},
                "type": "SINGLE FAMILY RESIDENCE"
            }
        }
    }
];
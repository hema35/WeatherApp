import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccuWeatherService {
  currentCondtion$: Observable<any>;
  constructor(private httpClient: HttpClient) { }

  getCurrentCondition(locationKey: string): Observable<any> {
    // this.currentCondtion$ = this.httpClient.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`);
  return of(
  [
    {
      "LocalObservationDateTime": "2023-01-11T17:39:00-05:00",
      "EpochTime": 1673476740,
      "WeatherText": "Mostly clear",
      "WeatherIcon": 34,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 5.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 42,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 6,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Chilly"
        },
        "Imperial": {
          "Value": 43,
          "Unit": "F",
          "UnitType": 18,
          "Phrase": "Chilly"
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 6,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Chilly"
        },
        "Imperial": {
          "Value": 43,
          "Unit": "F",
          "UnitType": 18,
          "Phrase": "Chilly"
        }
      },
      "RelativeHumidity": 68,
      "IndoorRelativeHumidity": 40,
      "DewPoint": {
        "Metric": {
          "Value": -0.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 32,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 135,
          "Localized": "SE",
          "English": "SE"
        },
        "Speed": {
          "Metric": {
            "Value": 4.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 2.8,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 10,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 6.2,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 0,
      "UVIndexText": "Low",
      "Visibility": {
        "Metric": {
          "Value": 19.3,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 12,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 26,
      "Ceiling": {
        "Metric": {
          "Value": 12192,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 40000,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1023.3,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 30.22,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "Steady",
        "Code": "S"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": 0.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 2,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 7.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 45,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 5,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 41,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 3,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 37,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 5.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 42,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 6.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 44,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 0.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 33,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 6.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 44,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 0.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 33,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 6.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 44,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://www.accuweather.com/en/us/philadelphia-pa/19102/current-weather/350540?lang=en-us",
      "Link": "http://www.accuweather.com/en/us/philadelphia-pa/19102/current-weather/350540?lang=en-us"
    }
  ])
  }

  getCities(searchKey: string) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('q', searchKey);
    httpHeaders.set('apiKey', 'CFzuixDeA0t3B6H7DayU6zJu0ow3ziFc');

    this.currentCondtion$ = this.httpClient.get(`http://dataservice.accuweather.com/locations/v1/cities/search`);
  }
}

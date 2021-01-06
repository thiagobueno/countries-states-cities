<h1>Countries, states and cities</h1>

<p>
  <a href="https://npm-stat.com/charts.html?package=countries-states-cities">
    <img src="https://img.shields.io/npm/dm/countries-states-cities.svg">
  </a>
  <a href="https://www.npmjs.com/package/countries-states-cities">
    <img src="https://badge.fury.io/js/countries-states-cities.svg">
  </a>
</p>

Countries, states/regions, cities.

Data from: https://github.com/dr5hn/countries-states-cities-database

# Install
`npm i countries-states-cities`

OR

`yarn add countries-states-cities`

# Usage

  - ES6 Module usage
   
     ```js
     import csc from 'countries-states-cities'
     ```

  - AMD Module usage
  
    ```js
    let csc = require('countries-states-cities')
    ```

# Docs

csc.getCountryByCode(code)
---------------

It accepts a valid `CountryCode` eg: `'AS'` and returns *Country Details*

type: **json | ICountry**

```js
{
    "id": 233,
    "name": "United States",
    "iso3": "USA",
    "iso2": "US",
    "phone_code": "1",
    "capital": "Washington",
    "currency": "USD",
    "native": "United States",
    "region": "Americas",
    "subregion": "Northern America",
    "timezones": [
        {
            "zoneName": "America\/Adak",
            "gmtOffset": -36000,
            "gmtOffsetName": "UTC-10:00",
            "abbreviation": "HST",
            "tzName": "Hawaii–Aleutian Standard Time"
        },
        {
            "zoneName": "America\/Anchorage",
            "gmtOffset": -32400,
            "gmtOffsetName": "UTC-09:00",
            "abbreviation": "AKST",
            "tzName": "Alaska Standard Time"
        },
    ],
    "emoji": "🇺🇸",
    "emojiU": "U+1F1FA U+1F1F8"
}
```

csc.getCountryById(id)
---------------

It accepts a valid `CountryId` and returns *Country Details*

type: **json | ICountry**

```js
{
    "id": 31,
    "name": "Brazil",
    "iso3": "BRA",
    "iso2": "BR",
    "phone_code": "55",
    "capital": "Brasilia",
    "currency": "BRL",
    "native": "Brasil",
    "region": "Americas",
    "subregion": "South America",
    "timezones": [
        {
            "zoneName": "America\/Araguaina",
            "gmtOffset": -10800,
            "gmtOffsetName": "UTC-03:00",
            "abbreviation": "BRT",
            "tzName": "Brasília Time"
        },
        {
            "zoneName": "America\/Bahia",
            "gmtOffset": -10800,
            "gmtOffsetName": "UTC-03:00",
            "abbreviation": "BRT",
            "tzName": "Brasília Time"
        },
    ],
    "emoji": "🇧🇷",
    "emojiU": "U+1F1E7 U+1F1F7"
}
```

csc.getStateById(id)
---------------

It accepts a valid `StateId` and returns *State Details*

type: **json | IState**

```js
{
    "id": 1997,
    "name": "Rio de Janeiro",
    "country_id": 31,
    "country_code": "BR",
    "state_code": "RJ"
}
```

csc.getCityById(id)
---------------

It accepts a valid `CityId` and returns *City Details*

type: **json | ICity**

```js
{
    "id": 16796,
    "name": "Paris",
    "state_id": 866,
    "state_code": "ON",
    "country_id": 39,
    "country_code": "CA",
    "latitude": "43.20000000",
    "longitude": "-80.38333000"
}
```

csc.getStatesOfCountry(countryId)
---------------

It accepts a valid `CountryId` and returns *all States* as Array of JSON

type: **array of json | IState**

```js
[
  {
    "id": 1462,
    "name": "Washington",
    "country_id": 233,
    "country_code": "US",
    "state_code": "WA"
  }
]

```
csc.getCitiesOfState(stateId)
---------------

It accepts a valid `CityId` and returns *all Cities* as Array of JSON

type: **array of json | ICity**

```js
[
  {
    "id": 7052,
    "name": "Roma",
    "state_id": 3905,
    "state_code": "QLD",
    "country_id": 14,
    "country_code": "AU",
    "latitude": "-26.56741000",
    "longitude": "148.78751000"
  }
]

```

csc.getAllCountries
---------------
It returns **all Countries**

type: **array of json | ICountry**

```js
[
  {
    "id": 39,
    "name": "Canada",
    "iso3": "CAN",
    "iso2": "CA",
    "phone_code": "1",
    "capital": "Ottawa",
    "currency": "CAD",
    "native": "Canada",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇨🇦",
    "emojiU": "U+1F1E8 U+1F1E6"
  }
]
```

# Insights
Total Countries: 250 <br>
Total States/Regions/Municipalities: 4,874 <br>
Total Cities/Towns/Districts: 146,156 <br>

Last Updated On: 22nd December 2020
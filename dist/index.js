"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var country_json_1 = __importDefault(require("./lib/countries.json"));
var state_json_1 = __importDefault(require("./lib/states.json"));
var city_json_1 = __importDefault(require("./lib/cities.json"));
exports.default = {
    getCountryById: function (id) {
        return _findEntryById(country_json_1.default, id);
    },
    getStateById: function (id) {
        return _findEntryById(state_json_1.default, id);
    },
    getCityById: function (id) {
        return _findEntryById(city_json_1.default, id);
    },
    getStatesOfCountry: function (countryId) {
        var states = state_json_1.default.filter(function (value, index) {
            return value.country_id === countryId;
        });
        return states.sort(compare);
    },
    getCitiesOfState: function (stateId) {
        var cities = city_json_1.default.filter(function (value, index) {
            return value.state_id === stateId;
        });
        return cities.sort(compare);
    },
    getAllCountries: function () {
        return country_json_1.default;
    },
    getCountryByCode: function (iso2) {
        return _findEntryByCode(country_json_1.default, iso2);
    }
};
var _findEntryById = function (source, id) {
    if (id && source != null) {
        var idx = source.findIndex(function (c) { return c.id === id; });
        return (idx !== -1) ? source[idx] : "";
    }
    else
        return "";
};
var _findEntryByCode = function (source, iso2) {
    if (iso2 && source != null) {
        var iso2x = source.findIndex(function (c) { return c.sortname === iso2; });
        return (iso2x !== -1) ? source[iso2x] : "";
    }
    else
        return "";
};
function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

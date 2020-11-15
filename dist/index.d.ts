import { ICountry, ICity, IState } from './src/interface';
export { ICountry, ICity, IState } from './src/interface';
declare const _default: {
    getCountryById: (id: string) => ICountry;
    getStateById: (id: string) => IState;
    getCityById: (id: string) => ICity;
    getStatesOfCountry: (countryId: string) => IState[];
    getCitiesOfState: (stateId: string) => ICity[];
    getAllCountries: () => ICountry[];
    getCountryByCode: (code: string) => ICountry;
};
export default _default;

import { ICountry, ICity, IState } from './src/interface';
export { ICountry, ICity, IState } from './src/interface';
declare const _default: {
    getCountryById: (id: number) => ICountry;
    getStateById: (id: number) => IState;
    getCityById: (id: number) => ICity;
    getStatesOfCountry: (countryId: number) => IState[];
    getCitiesOfState: (stateId: number) => ICity[];
    getAllCountries: () => ICountry[];
    getCountryByCode: (code: string) => ICountry;
};
export default _default;

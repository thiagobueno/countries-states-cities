export interface ICountry {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    phone_code: string;
    capital: string;
    currency: string;
    native: string;
    region: string;
    subregion: string;
    emoji: string;
    emojiU: string;
}
export interface IState {
    id: number;
    name: string;
    country_id: number;
    country_code: string;
    state_code: string;
}
export interface ICity {
    id: number;
    name: string;
    state_id: number;
    state_code: string;
    country_id: number;
    country_code: string;
    latitude: string;
    longitude: string;
}

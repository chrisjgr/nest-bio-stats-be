interface SeedCountryData {
    name: string;
    iso_name: string;
    flag_image_url: string;
}
interface SeedUserData {
    email: string;
    password: string;
    name: string;
    lastName: string;
    phone: string;
    birthDate: Date;
}
interface SeedInitialData {
    users: SeedUserData[];
    countries: SeedCountryData[];
}
export declare const initialData: SeedInitialData;
export {};

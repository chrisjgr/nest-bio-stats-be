import { CountriesService } from '../services/countries.service';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    getAllCountries(): Promise<import("../entities/country.entity").Country[]>;
}

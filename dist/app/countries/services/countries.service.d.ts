import { Country } from '../entities/country.entity';
import { Repository } from 'typeorm';
export declare class CountriesService {
    private readonly countriesRepository;
    constructor(countriesRepository: Repository<Country>);
    getAllCountries(): Promise<Country[]>;
}

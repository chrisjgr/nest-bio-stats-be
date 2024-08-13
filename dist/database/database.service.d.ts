import { User } from '@auth/entities';
import { Repository } from 'typeorm';
import { Country } from '@app/countries/entities/country.entity';
import { Plants } from '@app/plants/entities';
export declare class DatabaseService {
    private readonly userRepository;
    private readonly countriesRepository;
    private readonly plantsRepository;
    constructor(userRepository: Repository<User>, countriesRepository: Repository<Country>, plantsRepository: Repository<Plants>);
    runSeed(): Promise<string>;
    private deleteTables;
    private insertUsers;
    private insertCountries;
}

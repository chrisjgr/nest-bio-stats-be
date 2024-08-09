import { Injectable } from '@nestjs/common';
import { Profile, User } from '@auth/entities';
import { DeepPartial, Repository } from 'typeorm';
import { Country } from '@app/countries/entities/country.entity';
import { Plants } from '@app/plants/entities';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Country)
    private readonly countriesRepository: Repository<Country>,
    @InjectRepository(Plants)
    private readonly plantsRepository: Repository<Plants>,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertUsers();
    await this.insertCountries();

    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    const countryQueryBuilder = this.countriesRepository.createQueryBuilder();
    const plantsQueryBuilder = this.plantsRepository.createQueryBuilder();
    const userQueryBuilder = this.userRepository.createQueryBuilder();

    await countryQueryBuilder.delete().where({}).execute();
    await userQueryBuilder.delete().where({}).execute();
    await plantsQueryBuilder.delete().where({}).execute();
  }

  private async insertUsers() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach((user) => {
      const profile: DeepPartial<Profile> = {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        birthDate: user.birthDate,
        phone: user.phone,
      };

      const userData = this.userRepository.create({
        profile,
        password: bcrypt.hashSync(user.password, 10),
      });

      users.push(this.userRepository.create(userData));
    });

    const dbUsers = await this.userRepository.save(users);

    return dbUsers[0];
  }

  private async insertCountries() {
    const seedCountries = initialData.countries;
    const countries: Country[] = [];

    seedCountries.forEach((country) => {
      countries.push(this.countriesRepository.create(country));
    });

    const dbCountries = await this.countriesRepository.save(countries);

    return dbCountries[0];
  }
}

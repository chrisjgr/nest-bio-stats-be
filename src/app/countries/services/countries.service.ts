import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countriesRepository: Repository<Country>,
  ) {}

  async getAllCountries() {
    const countries = await this.countriesRepository.find({
      order: {
        name: 'ASC',
      },
    });

    if (!countries) throw new NotFoundException('Countries not found');

    return countries;
  }
}

import { Controller, Get, UseGuards } from '@nestjs/common';
import { CountriesService } from '../services/countries.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAllCountries() {
    return this.countriesService.getAllCountries();
  }
}

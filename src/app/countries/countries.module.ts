import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { CountriesController } from './controllers/countries.controller';
import { CountriesService } from './services/countries.service';
import { AuthModule } from '@auth/auth.module';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [TypeOrmModule.forFeature([Country]), AuthModule],
  exports: [TypeOrmModule],
})
export class CountriesModule {}

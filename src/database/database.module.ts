import { Module } from '@nestjs/common';
import { DatabaseController } from '@database/database.controller';
import { DatabaseService } from '@database/database.service';
import { AuthModule } from '@auth/auth.module';
import { PlantsModule } from '@app/plants/plants.module';
import { CountriesModule } from '@app/countries/countries.module';

@Module({
  controllers: [DatabaseController],
  imports: [AuthModule, CountriesModule, PlantsModule],
  providers: [DatabaseService],
  exports: [],
})
export class DatabaseModule {}

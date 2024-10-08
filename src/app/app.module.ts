import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModule as AppConfigModule } from '@config/config.module';
import { AuthModule } from '@auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { CountriesModule } from './countries/countries.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    AppConfigModule,
    AuthModule,
    CountriesModule,
    PlantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

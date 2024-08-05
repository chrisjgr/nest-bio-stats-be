import { Module } from '@nestjs/common';
import {
  Alerts,
  AlertStatus,
  AlertType,
  Plants,
  Sensors,
  SensorStatus,
  SensorType,
} from './entities';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantsService } from './services/plants.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      Plants,
      Sensors,
      SensorStatus,
      SensorType,
      Alerts,
      AlertStatus,
      AlertType,
    ]),
  ],
  controllers: [],
  providers: [PlantsService],
  exports: [TypeOrmModule],
})
export class PlantsModule {}

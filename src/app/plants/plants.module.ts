import { Module } from '@nestjs/common';
import { Plants } from './entities';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantsService } from './services/plants.service';
import { PlantsController } from './controllers/plants.controller';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Plants])],
  controllers: [PlantsController],
  providers: [PlantsService],
  exports: [TypeOrmModule],
})
export class PlantsModule {}

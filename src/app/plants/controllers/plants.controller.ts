import { ApiSecretGuard } from '@auth/guards/api-secret.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PlantsService } from '../services/plants.service';
import { GetUser } from '@auth/decorators/get-user.decorator';
import { User } from '@auth/entities';
import { CreatePlantDto, UpdatePlantDto } from '../dto';

@Controller('plants')
@UseGuards(ApiSecretGuard, AuthGuard())
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get('all')
  getAllPlants() {
    return this.plantsService.getAllPlants();
  }

  // ! Probar
  @Get('/user')
  getAllPlantsByUser(@GetUser() user: User) {
    return this.plantsService.getAllPlantsByUser({ userId: user.id });
  }

  @Get(':id')
  getPlantById(@Param('id') id: string) {
    return this.plantsService.getPlantById({ plantId: id });
  }

  @Patch(':id')
  updatePlant(@Body() updatePlantDto: UpdatePlantDto, @Param('id') id: string) {
    return this.plantsService.updatePlant(id, { ...updatePlantDto });
  }

  @Delete(':id')
  deletePlant(@Param('id') id: string) {
    return this.plantsService.deletePlant({ plantId: id });
  }

  @Post()
  createPlant(@Body() createPlantDto: CreatePlantDto, @GetUser() user: User) {
    return this.plantsService.createPlant({
      ...createPlantDto,
      userId: user.id,
    });
  }
}

import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Plants } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePlantDto,
  GetPlantsByIdDto,
  GetPlantsByUserIdDto,
  UpdatePlantDto,
} from '../dto';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plants)
    private readonly plantsRepository: Repository<Plants>,
  ) {}

  async getAllPlants() {
    const plants = await this.plantsRepository.find({
      relations: {
        country: true,
        user: false,
      },
    });

    if (!plants) throw new NotFoundException('Plants not found');

    return plants;
  }

  async getAllPlantsByUser(getPlantsByUserIdDto: GetPlantsByUserIdDto) {
    const { userId } = getPlantsByUserIdDto;

    const plants = await this.plantsRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        country: true,
        user: false,
      },
    });

    const redAlerts = this.plantsRepository.sum('redAlertsQuantity', {
      user: { id: userId },
    });

    const yellowAlerts = this.plantsRepository.sum('yellowAlertsQuantity', {
      user: { id: userId },
    });

    const okReads = this.plantsRepository.sum('okReadsQuantity', {
      user: { id: userId },
    });

    const disabledSensors = this.plantsRepository.sum(
      'disabledSensorsQuantity',
      {
        user: { id: userId },
      },
    );

    if (!plants) throw new NotFoundException('Plants not found');

    return {
      redAlerts,
      yellowAlerts,
      okReads,
      disabledSensors,
      plants,
    };
  }

  getPlantById(getPlantsByIdDto: GetPlantsByIdDto) {
    const { plantId } = getPlantsByIdDto;

    const plant = this.plantsRepository.findOne({
      where: {
        id: plantId,
      },
      relations: {
        country: true,
        user: false,
      },
    });

    if (!plant) throw new NotFoundException('Plant not found');

    return plant;
  }

  async createPlant(createPlantDto: CreatePlantDto) {
    try {
      const plant = this.plantsRepository.create({
        ...createPlantDto,
        country: {
          id: createPlantDto.countryId,
        },
        user: {
          id: createPlantDto.userId,
        },
      });

      await this.plantsRepository.save(plant);
      delete plant.user;
      delete plant.country;

      return {
        ...plant,
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async updatePlant(plantId: string, updatePlantDto: Partial<UpdatePlantDto>) {
    const { ...restUpdatePlantDto } = updatePlantDto;

    try {
      const plant = await this.getPlantById({ plantId });

      if (!plant) throw new NotFoundException('Plant not found');

      await this.plantsRepository.update(plantId, {
        ...restUpdatePlantDto,
      });

      const plantUpdate = this.getPlantById({ plantId });

      return plantUpdate;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async deletePlant(getPlantsByIdDto: GetPlantsByIdDto) {
    const { plantId } = getPlantsByIdDto;

    const plant = await this.getPlantById({ plantId });
    if (!plant) throw new NotFoundException('Plant not found');

    await this.plantsRepository.remove(plant);

    return true;
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}

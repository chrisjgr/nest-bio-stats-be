import { PlantsService } from '../services/plants.service';
import { User } from '@auth/entities';
import { CreatePlantDto, UpdatePlantDto } from '../dto';
export declare class PlantsController {
    private readonly plantsService;
    constructor(plantsService: PlantsService);
    getAllPlants(): Promise<import("../entities").Plants[]>;
    getAllPlantsByUser(user: User): Promise<{
        redAlerts: Promise<number>;
        yellowAlerts: Promise<number>;
        okReads: Promise<number>;
        disabledSensors: Promise<number>;
        plants: import("../entities").Plants[];
    }>;
    getPlantById(id: string): Promise<import("../entities").Plants>;
    updatePlant(updatePlantDto: UpdatePlantDto, id: string): Promise<import("../entities").Plants>;
    deletePlant(id: string): Promise<boolean>;
    createPlant(createPlantDto: CreatePlantDto, user: User): Promise<{
        id: string;
        name: string;
        redAlertsQuantity: number;
        yellowAlertsQuantity: number;
        okReadsQuantity: number;
        disabledSensorsQuantity: number;
        plantingDate: Date;
        country: import("../../countries/entities/country.entity").Country;
        user: User;
    }>;
}

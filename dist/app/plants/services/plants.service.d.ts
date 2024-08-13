import { Plants } from '../entities';
import { Repository } from 'typeorm';
import { CreatePlantDto, GetPlantsByIdDto, GetPlantsByUserIdDto, UpdatePlantDto } from '../dto';
export declare class PlantsService {
    private readonly plantsRepository;
    constructor(plantsRepository: Repository<Plants>);
    getAllPlants(): Promise<Plants[]>;
    getAllPlantsByUser(getPlantsByUserIdDto: GetPlantsByUserIdDto): Promise<{
        redAlerts: Promise<number>;
        yellowAlerts: Promise<number>;
        okReads: Promise<number>;
        disabledSensors: Promise<number>;
        plants: Plants[];
    }>;
    getPlantById(getPlantsByIdDto: GetPlantsByIdDto): Promise<Plants>;
    createPlant(createPlantDto: CreatePlantDto): Promise<{
        id: string;
        name: string;
        redAlertsQuantity: number;
        yellowAlertsQuantity: number;
        okReadsQuantity: number;
        disabledSensorsQuantity: number;
        plantingDate: Date;
        country: import("../../countries/entities/country.entity").Country;
        user: import("../../../authentication/entities").User;
    }>;
    updatePlant(plantId: string, updatePlantDto: Partial<UpdatePlantDto>): Promise<Plants>;
    deletePlant(getPlantsByIdDto: GetPlantsByIdDto): Promise<boolean>;
    private handleDBErrors;
}

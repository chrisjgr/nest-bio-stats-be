"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantsService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PlantsService = class PlantsService {
    constructor(plantsRepository) {
        this.plantsRepository = plantsRepository;
    }
    async getAllPlants() {
        const plants = await this.plantsRepository.find({
            relations: {
                country: true,
                user: false,
            },
        });
        if (!plants)
            throw new common_1.NotFoundException('Plants not found');
        return plants;
    }
    async getAllPlantsByUser(getPlantsByUserIdDto) {
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
        const disabledSensors = this.plantsRepository.sum('disabledSensorsQuantity', {
            user: { id: userId },
        });
        if (!plants)
            throw new common_1.NotFoundException('Plants not found');
        return {
            redAlerts,
            yellowAlerts,
            okReads,
            disabledSensors,
            plants,
        };
    }
    getPlantById(getPlantsByIdDto) {
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
        if (!plant)
            throw new common_1.NotFoundException('Plant not found');
        return plant;
    }
    async createPlant(createPlantDto) {
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
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async updatePlant(plantId, updatePlantDto) {
        const { ...restUpdatePlantDto } = updatePlantDto;
        try {
            const plant = await this.getPlantById({ plantId });
            if (!plant)
                throw new common_1.NotFoundException('Plant not found');
            await this.plantsRepository.update(plantId, {
                ...restUpdatePlantDto,
            });
            const plantUpdate = this.getPlantById({ plantId });
            return plantUpdate;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async deletePlant(getPlantsByIdDto) {
        const { plantId } = getPlantsByIdDto;
        const plant = await this.getPlantById({ plantId });
        if (!plant)
            throw new common_1.NotFoundException('Plant not found');
        await this.plantsRepository.remove(plant);
        return true;
    }
    handleDBErrors(error) {
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        console.log(error);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
exports.PlantsService = PlantsService;
exports.PlantsService = PlantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.Plants)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PlantsService);
//# sourceMappingURL=plants.service.js.map
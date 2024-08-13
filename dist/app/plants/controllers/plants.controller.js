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
exports.PlantsController = void 0;
const api_secret_guard_1 = require("../../../authentication/guards/api-secret.guard");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const plants_service_1 = require("../services/plants.service");
const get_user_decorator_1 = require("../../../authentication/decorators/get-user.decorator");
const entities_1 = require("../../../authentication/entities");
const dto_1 = require("../dto");
let PlantsController = class PlantsController {
    constructor(plantsService) {
        this.plantsService = plantsService;
    }
    getAllPlants() {
        return this.plantsService.getAllPlants();
    }
    getAllPlantsByUser(user) {
        return this.plantsService.getAllPlantsByUser({ userId: user.id });
    }
    getPlantById(id) {
        return this.plantsService.getPlantById({ plantId: id });
    }
    updatePlant(updatePlantDto, id) {
        return this.plantsService.updatePlant(id, { ...updatePlantDto });
    }
    deletePlant(id) {
        return this.plantsService.deletePlant({ plantId: id });
    }
    createPlant(createPlantDto, user) {
        return this.plantsService.createPlant({
            ...createPlantDto,
            userId: user.id,
        });
    }
};
exports.PlantsController = PlantsController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlantsController.prototype, "getAllPlants", null);
__decorate([
    (0, common_1.Get)('/user'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.User]),
    __metadata("design:returntype", void 0)
], PlantsController.prototype, "getAllPlantsByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantsController.prototype, "getPlantById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdatePlantDto, String]),
    __metadata("design:returntype", void 0)
], PlantsController.prototype, "updatePlant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantsController.prototype, "deletePlant", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePlantDto, entities_1.User]),
    __metadata("design:returntype", void 0)
], PlantsController.prototype, "createPlant", null);
exports.PlantsController = PlantsController = __decorate([
    (0, common_1.Controller)('plants'),
    (0, common_1.UseGuards)(api_secret_guard_1.ApiSecretGuard, (0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [plants_service_1.PlantsService])
], PlantsController);
//# sourceMappingURL=plants.controller.js.map
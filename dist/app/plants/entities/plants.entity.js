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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plants = void 0;
const country_entity_1 = require("../../countries/entities/country.entity");
const entities_1 = require("../../../authentication/entities");
const typeorm_1 = require("typeorm");
let Plants = class Plants {
};
exports.Plants = Plants;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Plants.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Plants.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'red_alerts_quantity' }),
    __metadata("design:type", Number)
], Plants.prototype, "redAlertsQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'yellow_alerts_quantity' }),
    __metadata("design:type", Number)
], Plants.prototype, "yellowAlertsQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'ok_reads_quantity' }),
    __metadata("design:type", Number)
], Plants.prototype, "okReadsQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'disabled_sensors_quantity' }),
    __metadata("design:type", Number)
], Plants.prototype, "disabledSensorsQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'planting_date', default: new Date() }),
    __metadata("design:type", Date)
], Plants.prototype, "plantingDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.plants, {
        cascade: ['recover'],
    }),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", country_entity_1.Country)
], Plants.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.plants, {
        cascade: ['recover'],
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.User)
], Plants.prototype, "user", void 0);
exports.Plants = Plants = __decorate([
    (0, typeorm_1.Entity)('plants')
], Plants);
//# sourceMappingURL=plants.entity.js.map
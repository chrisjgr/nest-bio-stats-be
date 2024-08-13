"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_controller_1 = require("./database.controller");
const database_service_1 = require("./database.service");
const auth_module_1 = require("../authentication/auth.module");
const plants_module_1 = require("../app/plants/plants.module");
const countries_module_1 = require("../app/countries/countries.module");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        controllers: [database_controller_1.DatabaseController],
        imports: [auth_module_1.AuthModule, countries_module_1.CountriesModule, plants_module_1.PlantsModule],
        providers: [database_service_1.DatabaseService],
        exports: [],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map
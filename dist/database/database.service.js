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
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../authentication/entities");
const typeorm_1 = require("typeorm");
const country_entity_1 = require("../app/countries/entities/country.entity");
const entities_2 = require("../app/plants/entities");
const seed_data_1 = require("./data/seed-data");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
let DatabaseService = class DatabaseService {
    constructor(userRepository, countriesRepository, plantsRepository) {
        this.userRepository = userRepository;
        this.countriesRepository = countriesRepository;
        this.plantsRepository = plantsRepository;
    }
    async runSeed() {
        await this.deleteTables();
        await this.insertUsers();
        await this.insertCountries();
        return 'SEED EXECUTED';
    }
    async deleteTables() {
        const countryQueryBuilder = this.countriesRepository.createQueryBuilder();
        const plantsQueryBuilder = this.plantsRepository.createQueryBuilder();
        const userQueryBuilder = this.userRepository.createQueryBuilder();
        await countryQueryBuilder.delete().where({}).execute();
        await userQueryBuilder.delete().where({}).execute();
        await plantsQueryBuilder.delete().where({}).execute();
    }
    async insertUsers() {
        const seedUsers = seed_data_1.initialData.users;
        const users = [];
        seedUsers.forEach((user) => {
            const profile = {
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                birthDate: user.birthDate,
                phone: user.phone,
            };
            const userData = this.userRepository.create({
                profile,
                password: bcrypt.hashSync(user.password, 10),
            });
            users.push(this.userRepository.create(userData));
        });
        const dbUsers = await this.userRepository.save(users);
        return dbUsers[0];
    }
    async insertCountries() {
        const seedCountries = seed_data_1.initialData.countries;
        const countries = [];
        seedCountries.forEach((country) => {
            countries.push(this.countriesRepository.create(country));
        });
        const dbCountries = await this.countriesRepository.save(countries);
        return dbCountries[0];
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(country_entity_1.Country)),
    __param(2, (0, typeorm_2.InjectRepository)(entities_2.Plants)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], DatabaseService);
//# sourceMappingURL=database.service.js.map
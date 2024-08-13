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
exports.ApiSecretGuard = void 0;
const config_1 = require("../../config/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let ApiSecretGuard = class ApiSecretGuard {
    constructor(reflector, configServices) {
        this.reflector = reflector;
        this.configServices = configServices;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['api-secret'];
        console.log({ authHeader });
        const isAuth = authHeader === this.configServices.secret;
        if (!isAuth) {
            throw new common_1.UnauthorizedException('Not Allowed');
        }
        return isAuth;
    }
};
exports.ApiSecretGuard = ApiSecretGuard;
exports.ApiSecretGuard = ApiSecretGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [core_1.Reflector, void 0])
], ApiSecretGuard);
//# sourceMappingURL=api-secret.guard.js.map
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environments = void 0;
const config_1 = require("@nestjs/config");
const config_2 = require("./config");
const Joi = require("joi");
class Environments {
}
exports.Environments = Environments;
_a = Environments;
Environments.enviromentFiles = {
    dev: '.env',
    stag: '.stag.env',
    prod: '.prod.env',
};
Environments.executeEnvConfig = () => {
    return config_1.ConfigModule.forRoot({
        envFilePath: _a.enviromentFiles[process.env.NODE_ENV] || ['.env'],
        load: [config_2.default],
        isGlobal: true,
        validationSchema: _a.getEnvSchema(),
    });
};
Environments.getEnvSchema = () => {
    return Joi.object({
        secret: Joi.string(),
        jwtSecret: Joi.string(),
        pg: Joi.object({
            type: Joi.string().required(),
            host: Joi.string().required(),
            port: Joi.number().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            database: Joi.string().required(),
        }),
        port: Joi.number(),
    });
};
//# sourceMappingURL=environments.js.map
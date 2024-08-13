"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        secret: process.env.API_SECRET,
        jwtSecret: process.env.JWT_SECRET,
        pg: {
            type: process.env.DB_TYPE || 'postgres',
            host: process.env.PG_HOST,
            port: process.env.PG_PORT,
            username: process.env.PG_USERNAME,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
        },
        port: process.env.PORT || 3000,
    };
});
//# sourceMappingURL=config.js.map
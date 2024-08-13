"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConnection = void 0;
const postgresConnection = async (configService) => {
    const { database, host, port, username, password, type } = configService.pg;
    return {
        type,
        host,
        port,
        username,
        password,
        database,
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
    };
};
exports.postgresConnection = postgresConnection;
//# sourceMappingURL=postgres.js.map
declare const _default: (() => {
    secret: string;
    jwtSecret: string;
    pg: {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
    };
    port: string | number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    secret: string;
    jwtSecret: string;
    pg: {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
    };
    port: string | number;
}>;
export default _default;

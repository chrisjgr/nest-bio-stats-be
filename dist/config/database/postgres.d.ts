import { ConfigType } from '@nestjs/config';
import config from '../config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const postgresConnection: (configService: ConfigType<typeof config>) => Promise<TypeOrmModuleOptions>;

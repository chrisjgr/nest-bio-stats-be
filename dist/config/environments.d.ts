import { DynamicModule } from '@nestjs/common';
import * as Joi from 'joi';
export declare class Environments {
    private static enviromentFiles;
    static readonly executeEnvConfig: () => DynamicModule;
    static readonly getEnvSchema: () => Joi.ObjectSchema;
}

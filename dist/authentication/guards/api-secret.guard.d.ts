import config from '@config/config';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
export declare class ApiSecretGuard implements CanActivate {
    private readonly reflector;
    private configServices;
    constructor(reflector: Reflector, configServices: ConfigType<typeof config>);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}

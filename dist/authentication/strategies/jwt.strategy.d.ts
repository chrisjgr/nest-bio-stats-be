import { ConfigType } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../models/jwt-payload.interface';
import config from 'src/config/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    private configService;
    constructor(userRepository: Repository<User>, configService: ConfigType<typeof config>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};

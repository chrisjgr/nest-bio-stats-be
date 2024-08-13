import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User, Profile } from '../entities';
import { LoginUserDto, CreateUserDto } from '../dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    login(loginUserDto: LoginUserDto): Promise<{
        user: Profile;
        token: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<{
        token: string;
        id: string;
        password: string;
        profile: Profile;
        plants: import("../../app/plants/entities").Plants[];
    }>;
    checkAuthStatus(user: User): Promise<{
        token: string;
        id: string;
        password: string;
        profile: Profile;
        plants: import("../../app/plants/entities").Plants[];
    }>;
    private getJwtToken;
    private handleDBErrors;
}

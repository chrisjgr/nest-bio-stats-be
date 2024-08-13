import { AuthService } from '../services/auth.service';
import { CreateUserDto, LoginUserDto } from '../dto';
import { User } from '../entities';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(createUserDto: CreateUserDto): Promise<{
        token: string;
        id: string;
        password: string;
        profile: import("../entities").Profile;
        plants: import("../../app/plants/entities").Plants[];
    }>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
        user: import("../entities").Profile;
        token: string;
    }>;
    checkAuthStatus(user: User): Promise<{
        token: string;
        id: string;
        password: string;
        profile: import("../entities").Profile;
        plants: import("../../app/plants/entities").Plants[];
    }>;
}

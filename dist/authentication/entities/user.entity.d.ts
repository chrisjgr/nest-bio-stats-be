import { Profile } from './profile.entity';
import { Plants } from '@app/plants/entities/plants.entity';
export declare class User {
    id: string;
    password: string;
    profile: Profile;
    plants: Plants[];
}

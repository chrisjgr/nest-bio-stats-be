import { User } from './user.entity';
export declare class Profile {
    id: string;
    email: string;
    phone: string;
    name: string;
    lastName: string;
    birthDate: Date;
    user: User;
    checkFieldsBeforeInsert(): void;
    checkFieldsBeforeUpdate(): void;
}

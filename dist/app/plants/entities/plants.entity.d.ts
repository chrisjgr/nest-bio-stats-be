import { Country } from '@app/countries/entities/country.entity';
import { User } from '@auth/entities';
export declare class Plants {
    id: string;
    name: string;
    redAlertsQuantity: number;
    yellowAlertsQuantity: number;
    okReadsQuantity: number;
    disabledSensorsQuantity: number;
    plantingDate: Date;
    country: Country;
    user: User;
}

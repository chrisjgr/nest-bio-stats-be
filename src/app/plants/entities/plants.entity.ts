import { Country } from '@app/countries/entities/country.entity';
import { User } from '@auth/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('plants')
export class Plants {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('float', { name: 'red_alerts_quantity' })
  redAlertsQuantity: number;

  @Column('float', { name: 'yellow_alerts_quantity' })
  yellowAlertsQuantity: number;

  @Column('float', { name: 'ok_reads_quantity' })
  okReadsQuantity: number;

  @Column('float', { name: 'disabled_sensors_quantity' })
  disabledSensorsQuantity: number;

  @Column('timestamp', { name: 'planting_date', default: new Date() })
  plantingDate: Date;

  // * Relations
  @ManyToOne(() => Country, (country) => country.plants, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @ManyToOne(() => User, (user) => user.plants, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}

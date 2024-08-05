import { Country } from '@app/countries/entities/country.entity';
import { User } from '@auth/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sensors } from './sensors';

@Entity('plants')
export class Plants {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('timestamp', { default: new Date() })
  planting_date: Date;

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

  @OneToMany(() => Sensors, (sensors) => sensors.plants, {
    cascade: ['recover'],
  })
  sensors: Sensors[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sensors } from './sensors.entity';

@Entity('sensors_type')
export class SensorType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @OneToMany(() => Sensors, (sensor) => sensor.sensorType)
  sensor: Sensors;
}

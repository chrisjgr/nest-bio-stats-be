import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Plants } from '../plants.entity';
import { Alerts } from '../alerts/alerts.entity';
import { SensorType } from './sensor-type.entity';
import { SensorStatus } from './sensor-status.entity';

@Entity('sensors')
export class Sensors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;

  @Column('text')
  lastName: string;

  @Column('timestamp', { name: 'installation_date', default: new Date() })
  installationDate: Date;

  // * JOINS RELATIONS

  // * Plant
  @ManyToOne(() => Plants, (plants) => plants.sensors, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'plants_id' })
  plants: Plants;

  // * Alerts
  @OneToMany(() => Alerts, (alerts) => alerts.sensor, {
    cascade: ['recover'],
  })
  alerts: Alerts[];

  // * Sensor Type
  @ManyToOne(() => SensorType, (sensorsType) => sensorsType.sensor, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'sensor_type_id' })
  sensorType: SensorType;

  // * Sensor Type
  @ManyToOne(() => SensorStatus, (sensorsStatus) => sensorsStatus.sensor, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'sensor_status_id' })
  sensorStatus: SensorStatus;
}

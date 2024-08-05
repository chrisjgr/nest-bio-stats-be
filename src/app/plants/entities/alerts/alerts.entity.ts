import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sensors } from '../sensors/sensors.entity';
import { AlertType } from './alert-type.entity';
import { AlertStatus } from './alert-status.entity';

@Entity('alerts')
export class Alerts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  message: string;

  @Column('timestamp', { default: new Date() })
  timestamp: Date;

  // * RELATIONS

  // * Sensors
  @ManyToOne(() => Sensors, (sensor) => sensor.alerts, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'sensor_id' })
  sensor: Sensors;

  // * Alert Type
  @ManyToOne(() => AlertType, (alertType) => alertType.alert, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'alert_type_id' })
  alertType: AlertType;

  // * Alert Status
  @ManyToOne(() => AlertStatus, (alertStatus) => alertStatus.alert, {
    cascade: ['recover'],
  })
  @JoinColumn({ name: 'alert_status_id' })
  alertStatus: AlertStatus;
}

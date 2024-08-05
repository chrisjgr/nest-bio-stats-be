import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alerts } from './alerts.entity';

@Entity('alert_status')
export class AlertStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @OneToMany(() => Alerts, (alert) => alert.alertStatus)
  alert: Alerts;
}

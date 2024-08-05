import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alerts } from './alerts.entity';

@Entity('alert_type')
export class AlertType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @OneToMany(() => Alerts, (alert) => alert.alertType)
  alert: Alerts;
}

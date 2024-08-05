import { Plants } from '@app/plants/entities/plants.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  flag_image_url: string;

  @Column('text')
  iso_name: string;

  @OneToMany(() => Plants, (plants) => plants.country)
  plants: Plants;
}

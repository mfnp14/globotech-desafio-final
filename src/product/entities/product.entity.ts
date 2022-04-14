import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ name: 'id_restaurant' })
  idRestaurant: string;

  @Column({ nullable: false, type: 'varchar' })
  urlImage: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @ManyToOne(() => Restaurant, (restaurants) => restaurants.products)
  @JoinColumn({ name: 'id_restaurant', referencedColumnName: 'id' })
  restaurant: Restaurant;
}

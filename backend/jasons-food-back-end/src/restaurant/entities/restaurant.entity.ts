import { Product } from '../../product/entities/product.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  address: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  logoUrl: string;

  @Column({ nullable: false })
  manager: string;

  @OneToMany(() => Product, (products) => products.restaurant)
  products: Product[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}

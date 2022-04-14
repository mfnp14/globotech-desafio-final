import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('extra')
export class Extra {
  @PrimaryGeneratedColumn('increment')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}

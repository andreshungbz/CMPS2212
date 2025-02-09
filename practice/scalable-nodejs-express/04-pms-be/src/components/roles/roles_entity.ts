// role_entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn('uuid')
  role_id: string;

  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @Column({ length: 200 })
  description: string;

  @Column({ type: 'text' })
  rights: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Student } from './student.interface';

@Entity()
export class StudentEntity implements Student {
  mark: number;
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  gender: boolean;

  @Column()
  birthday: Date;

  @Column()
  schoolfee: number;

  @Column()
  marks: number;
}

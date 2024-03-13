import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    username: string;
    password: string;
    fullname: string;
    email: string;
    gender: boolean;
    birthday: Date;
    schoolfee: number;
    marks: number;
}

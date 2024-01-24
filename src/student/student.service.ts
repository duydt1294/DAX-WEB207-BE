import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
const path = require('path');
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { getOneStudentDto } from './dto/getOneStudent.dto';

@Injectable()
export class StudentService {
  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    const file = path.join(process.cwd(), './db/Students.json');
    const StudentList = JSON.parse(readFileSync(file, 'utf8'));
    let response = [];
    StudentList.forEach(st => {
      response.push({
        username: st.username,
        fullname: st.fullname,
        email: st.email,
        gender: st.gender,
      });
    });
    return response;
  }

  findOne(username: string) {
    const file = path.join(process.cwd(), './db/Students.json');
    const StudentList = JSON.parse(readFileSync(file, 'utf8'));
    let found = StudentList.find(stu => {
      let result = null;
      if(stu.username == username) {
        result = [stu].slice()[0];
        delete result.password;
      }
      return result;
    });
    return found;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}

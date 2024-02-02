import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
const path = require('path');
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  create(createSubjectDto: CreateSubjectDto) {
    return 'This action adds a new subject';
  }

  findAll() {
    const file = path.join(process.cwd(), './db/Subjects.json');
    const SubjectList = JSON.parse(readFileSync(file, 'utf8'));
    SubjectList.forEach(st => {
      delete st.Quiz;
    });
    return SubjectList;
  }

  findOne(id: string) {
    const file = path.join(process.cwd(), './db/Subjects.json');
    const SubjectList = JSON.parse(readFileSync(file, 'utf8'));
    let found = SubjectList.find(sub => {
      return sub.Id == id ? sub : null;
    });
    if(found != null) {
      const file = path.join(process.cwd(), './db/Quizes.json');
      const QuizList = JSON.parse(readFileSync(file, 'utf8'));
      let foundQ = QuizList.find(qui => {
        return qui.subject == id ? qui : null;
      });
      found.Quiz = foundQ.quiz;
    }
    return found;
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}

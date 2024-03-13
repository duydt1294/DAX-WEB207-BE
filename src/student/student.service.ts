import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { getOneStudentDto } from './dto/getOneStudent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.schema';
import { Model, Document as MongooseDocument } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      //const student = await this.studentModel.create(createStudentDto);
      const test = new this.studentModel(createStudentDto);
      console.log(test);
      // return student;
      return test.save();
    } catch (error) {
      console.error(`Error creating student: ${error.message}`);
      throw new InternalServerErrorException('Error creating student');
    }
  }

  async findAll(): Promise<Student[]> {
    const students = await this.studentModel.find().exec();
    console.log(students);
    return students;
  }

  async findOne(studentId: string): Promise<Student> {
    try {
      const student = await this.findStudent(studentId);
      return student;
    } catch (error) {
      // console.error(`Student not found with id: ${studentId}`);
      throw new NotFoundException(`Không tìm thấyyy: ${studentId}`);
    }
  }

  async update(
    studentId: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    try {
      const student = (await this.findStudent(
        studentId,
      )) as unknown as MongooseDocument<Student>;
      if (!student) {
        throw new NotFoundException(`Student not found: ${studentId}`);
      }
      Object.assign(student, updateStudentDto);
      await student.save();
      return student.toObject();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(studentId: string): Promise<void> {
    // return `this action removes a student ${studentId}`;
    // await this.studentModel.deleteOne({ _id: studentId }).exec();
    try {
      const student = await this.findStudent(studentId);
      const result = await this.studentModel
        .deleteOne({ _id: studentId })
        .exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException(`Không tìm thấy: ${studentId}`);
      }
      console.log('xóa thành công');
    } catch (error) {
      console.error(`Error deleting student with id: ${studentId}`, error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findStudent(id: string): Promise<Student> {
    try {
      const student = await this.studentModel.findById(id).exec();
      if (!student) {
        throw new NotFoundException(`Student not found with id: ${id}`);
      }
      return student;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

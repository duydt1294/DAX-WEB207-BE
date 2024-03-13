import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { getOneStudentDto } from './dto/getOneStudent.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.studentService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async removeStudent(@Param('id') id: string) {
    await this.studentService.remove(id);
  }
  
}

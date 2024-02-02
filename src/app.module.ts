import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [StudentModule, SubjectModule, MongooseModule.forRoot(
    'mongodb+srv://duydt1294:EROkLAHrk5X0L6Qp@cluster0.tirsfay.mongodb.net/Students?retryWrites=true&w=majority',
  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

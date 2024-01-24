import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [StudentModule, SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

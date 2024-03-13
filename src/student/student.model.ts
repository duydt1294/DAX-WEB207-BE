import * as mongoose from 'mongoose';

export class StudentSchema extends mongoose.Schema {
  username: { type: String; required: true };
  password: { type: String; required: true };
  fullname: { type: String; required: true };
  email: { type: String; required: true };
  gender: { type:Boolean; required: true };
  birthday: { type: Date; required: true };
  schoolfee: { type: Number; required: true };
  mark: { type: Number; required: true };
}

// student.model.ts
export const StudentModel = mongoose.model('Student', new StudentSchema());



// @Schema()
// export class studentSchema {
//   username: { type: String },
//   password: { type: String },
//   fullname: { type: String },
//   email: { type: String },
//   gender: { type: Boolean },
//   birthday: { type: Date },
//   schoolfee: { type: String },
//   mark: { type: Number },
// };
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type studentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  gender: boolean;

  @Prop()
  birthday: Date;

  @Prop()
  schoolfee: number;

  @Prop()
  mark: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);

import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentProfileDto } from './create-student_profile.dto';

export class UpdateStudentProfileDto extends PartialType(CreateStudentProfileDto) {}

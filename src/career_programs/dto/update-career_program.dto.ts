import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerProgramDto } from './create-career_program.dto';

export class UpdateCareerProgramDto extends PartialType(CreateCareerProgramDto) {}

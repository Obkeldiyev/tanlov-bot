import { Injectable } from '@nestjs/common';
import { CreateCareerProgramDto } from './dto/create-career_program.dto';
import { UpdateCareerProgramDto } from './dto/update-career_program.dto';

@Injectable()
export class CareerProgramsService {
  create(createCareerProgramDto: CreateCareerProgramDto) {
    return 'This action adds a new careerProgram';
  }

  findAll() {
    return `This action returns all careerPrograms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerProgram`;
  }

  update(id: number, updateCareerProgramDto: UpdateCareerProgramDto) {
    return `This action updates a #${id} careerProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} careerProgram`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareerProgramsService } from './career_programs.service';
import { CreateCareerProgramDto } from './dto/create-career_program.dto';
import { UpdateCareerProgramDto } from './dto/update-career_program.dto';

@Controller('career-programs')
export class CareerProgramsController {
  constructor(private readonly careerProgramsService: CareerProgramsService) {}

  @Post()
  create(@Body() createCareerProgramDto: CreateCareerProgramDto) {
    return this.careerProgramsService.create(createCareerProgramDto);
  }

  @Get()
  findAll() {
    return this.careerProgramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerProgramsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerProgramDto: UpdateCareerProgramDto) {
    return this.careerProgramsService.update(+id, updateCareerProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerProgramsService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { CareerProgramsService } from './career_programs.service';
import { CareerProgramsController } from './career_programs.controller';

@Module({
  controllers: [CareerProgramsController],
  providers: [CareerProgramsService],
})
export class CareerProgramsModule {}

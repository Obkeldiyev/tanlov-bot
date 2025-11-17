import { Test, TestingModule } from '@nestjs/testing';
import { CareerProgramsController } from './career_programs.controller';
import { CareerProgramsService } from './career_programs.service';

describe('CareerProgramsController', () => {
  let controller: CareerProgramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareerProgramsController],
      providers: [CareerProgramsService],
    }).compile();

    controller = module.get<CareerProgramsController>(CareerProgramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

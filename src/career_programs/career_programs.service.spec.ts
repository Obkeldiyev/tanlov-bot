import { Test, TestingModule } from '@nestjs/testing';
import { CareerProgramsService } from './career_programs.service';

describe('CareerProgramsService', () => {
  let service: CareerProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareerProgramsService],
    }).compile();

    service = module.get<CareerProgramsService>(CareerProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { QuizOptionsService } from './quiz_options.service';

describe('QuizOptionsService', () => {
  let service: QuizOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizOptionsService],
    }).compile();

    service = module.get<QuizOptionsService>(QuizOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

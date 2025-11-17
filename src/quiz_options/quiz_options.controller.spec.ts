import { Test, TestingModule } from '@nestjs/testing';
import { QuizOptionsController } from './quiz_options.controller';
import { QuizOptionsService } from './quiz_options.service';

describe('QuizOptionsController', () => {
  let controller: QuizOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizOptionsController],
      providers: [QuizOptionsService],
    }).compile();

    controller = module.get<QuizOptionsController>(QuizOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { QuizAnswersService } from './quiz_answers.service';
import { QuizAnswersController } from './quiz_answers.controller';

@Module({
  controllers: [QuizAnswersController],
  providers: [QuizAnswersService],
})
export class QuizAnswersModule {}

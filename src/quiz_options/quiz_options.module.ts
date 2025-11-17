import { Module } from '@nestjs/common';
import { QuizOptionsService } from './quiz_options.service';
import { QuizOptionsController } from './quiz_options.controller';

@Module({
  controllers: [QuizOptionsController],
  providers: [QuizOptionsService],
})
export class QuizOptionsModule {}

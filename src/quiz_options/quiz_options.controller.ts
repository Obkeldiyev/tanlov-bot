import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizOptionsService } from './quiz_options.service';
import { CreateQuizOptionDto } from './dto/create-quiz_option.dto';
import { UpdateQuizOptionDto } from './dto/update-quiz_option.dto';

@Controller('quiz-options')
export class QuizOptionsController {
  constructor(private readonly quizOptionsService: QuizOptionsService) {}

  @Post()
  create(@Body() createQuizOptionDto: CreateQuizOptionDto) {
    return this.quizOptionsService.create(createQuizOptionDto);
  }

  @Get()
  findAll() {
    return this.quizOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizOptionDto: UpdateQuizOptionDto) {
    return this.quizOptionsService.update(+id, updateQuizOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizOptionsService.remove(+id);
  }
}

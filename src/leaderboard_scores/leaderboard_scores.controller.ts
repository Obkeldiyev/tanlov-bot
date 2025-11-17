import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeaderboardScoresService } from './leaderboard_scores.service';
import { CreateLeaderboardScoreDto } from './dto/create-leaderboard_score.dto';
import { UpdateLeaderboardScoreDto } from './dto/update-leaderboard_score.dto';

@Controller('leaderboard-scores')
export class LeaderboardScoresController {
  constructor(private readonly leaderboardScoresService: LeaderboardScoresService) {}

  @Post()
  create(@Body() createLeaderboardScoreDto: CreateLeaderboardScoreDto) {
    return this.leaderboardScoresService.create(createLeaderboardScoreDto);
  }

  @Get()
  findAll() {
    return this.leaderboardScoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaderboardScoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaderboardScoreDto: UpdateLeaderboardScoreDto) {
    return this.leaderboardScoresService.update(+id, updateLeaderboardScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaderboardScoresService.remove(+id);
  }
}

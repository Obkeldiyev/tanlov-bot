import { Injectable } from '@nestjs/common';
import { CreateLeaderboardScoreDto } from './dto/create-leaderboard_score.dto';
import { UpdateLeaderboardScoreDto } from './dto/update-leaderboard_score.dto';

@Injectable()
export class LeaderboardScoresService {
  create(createLeaderboardScoreDto: CreateLeaderboardScoreDto) {
    return 'This action adds a new leaderboardScore';
  }

  findAll() {
    return `This action returns all leaderboardScores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaderboardScore`;
  }

  update(id: number, updateLeaderboardScoreDto: UpdateLeaderboardScoreDto) {
    return `This action updates a #${id} leaderboardScore`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaderboardScore`;
  }
}

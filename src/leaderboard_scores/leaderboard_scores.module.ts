import { Module } from '@nestjs/common';
import { LeaderboardScoresService } from './leaderboard_scores.service';
import { LeaderboardScoresController } from './leaderboard_scores.controller';

@Module({
  controllers: [LeaderboardScoresController],
  providers: [LeaderboardScoresService],
})
export class LeaderboardScoresModule {}

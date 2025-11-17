import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardScoresController } from './leaderboard_scores.controller';
import { LeaderboardScoresService } from './leaderboard_scores.service';

describe('LeaderboardScoresController', () => {
  let controller: LeaderboardScoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaderboardScoresController],
      providers: [LeaderboardScoresService],
    }).compile();

    controller = module.get<LeaderboardScoresController>(LeaderboardScoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

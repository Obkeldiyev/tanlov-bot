import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardScoresService } from './leaderboard_scores.service';

describe('LeaderboardScoresService', () => {
  let service: LeaderboardScoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaderboardScoresService],
    }).compile();

    service = module.get<LeaderboardScoresService>(LeaderboardScoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

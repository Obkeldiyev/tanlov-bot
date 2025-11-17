import { PartialType } from '@nestjs/mapped-types';
import { CreateLeaderboardScoreDto } from './create-leaderboard_score.dto';

export class UpdateLeaderboardScoreDto extends PartialType(CreateLeaderboardScoreDto) {}

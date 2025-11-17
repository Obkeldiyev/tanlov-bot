import { Module } from '@nestjs/common';
import { UserBadgesService } from './user_badges.service';
import { UserBadgesController } from './user_badges.controller';

@Module({
  controllers: [UserBadgesController],
  providers: [UserBadgesService],
})
export class UserBadgesModule {}

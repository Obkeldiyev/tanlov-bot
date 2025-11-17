import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBadgeDto } from './create-user_badge.dto';

export class UpdateUserBadgeDto extends PartialType(CreateUserBadgeDto) {}

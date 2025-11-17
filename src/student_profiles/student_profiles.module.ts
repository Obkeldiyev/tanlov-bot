import { Module } from '@nestjs/common';
import { StudentProfilesService } from './student_profiles.service';
import { StudentProfilesController } from './student_profiles.controller';

@Module({
  controllers: [StudentProfilesController],
  providers: [StudentProfilesService],
})
export class StudentProfilesModule {}

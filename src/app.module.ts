import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StudentProfilesModule } from './student_profiles/student_profiles.module';
import { FacultiesModule } from './faculties/faculties.module';
import { ProgramsModule } from './programs/programs.module';
import { CareerModule } from './career/career.module';
import { CareerProgramsModule } from './career_programs/career_programs.module';
import { QuizQuestionsModule } from './quiz_questions/quiz_questions.module';
import { QuizOptionsModule } from './quiz_options/quiz_options.module';
import { QuizSessionsModule } from './quiz_sessions/quiz_sessions.module';
import { QuizAnswersModule } from './quiz_answers/quiz_answers.module';
import { ResultsModule } from './results/results.module';
import { MentorsModule } from './mentors/mentors.module';
import { BadgesModule } from './badges/badges.module';
import { UserBadgesModule } from './user_badges/user_badges.module';
import { LeaderboardScoresModule } from './leaderboard_scores/leaderboard_scores.module';
import { MediaModule } from './media/media.module';
import { EventsModule } from './events/events.module';
import { CertificatesModule } from './certificates/certificates.module';
import { AuditLogsModule } from './audit_logs/audit_logs.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [UsersModule, StudentProfilesModule, FacultiesModule, ProgramsModule, CareerModule, CareerProgramsModule, QuizQuestionsModule, QuizOptionsModule, QuizSessionsModule, QuizAnswersModule, ResultsModule, MentorsModule, BadgesModule, UserBadgesModule, LeaderboardScoresModule, MediaModule, EventsModule, CertificatesModule, AuditLogsModule, AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

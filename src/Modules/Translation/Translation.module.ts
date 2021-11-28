import { TranslationController } from './Translation.controller';
import { IssueModule } from 'src/Modules/Issue/Issue.module';
import { TranslationService } from './Translation.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
  imports: [IssueModule],
})
export class TranslationModule {}

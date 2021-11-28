import { TranslationSeedModule } from './Seeds/Translation/Translation.module';
import { TranslationProvider } from 'models/Translation/Translation.provider';
import { IssueProvider } from 'models/Issue/Issue.provider';
import { DatabaseProvider } from './Database.provider';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [TranslationSeedModule, TranslationProvider, DatabaseProvider, IssueProvider],
  exports: [TranslationSeedModule, TranslationProvider, DatabaseProvider, IssueProvider],
})
export class DatabaseModule {}

import { TranslationProvider } from 'models/Translation.provider';
import { DatabaseProvider } from './Database.provider';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseProvider, TranslationProvider],
  providers: [],
  exports: [TranslationProvider, DatabaseProvider],
})
export class DatabaseModule {}

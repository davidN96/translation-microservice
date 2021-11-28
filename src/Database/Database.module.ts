import { TranslationSeedModule } from './Seeds/Translation/Translation.module';
import { TranslationProvider } from 'models/Translation.provider';
import { DatabaseProvider } from './Database.provider';
import { Module } from '@nestjs/common';
@Module({
  imports: [DatabaseProvider, TranslationProvider, TranslationSeedModule],
  providers: [],
  exports: [TranslationProvider, DatabaseProvider, TranslationSeedModule],
})
export class DatabaseModule {}

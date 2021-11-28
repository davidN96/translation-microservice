import { CommandModule } from 'nestjs-command';
import { Module } from '@nestjs/common';

import { TranslationSeed } from './Translation.seed';
import { TranslationProvider } from 'models/Translation.provider';

@Module({
  imports: [CommandModule, TranslationProvider],
  providers: [TranslationSeed],
  exports: [TranslationSeed, CommandModule],
})
export class TranslationSeedModule {}

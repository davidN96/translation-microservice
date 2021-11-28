import { TranslationProvider } from 'models/Translation/Translation.provider';
import { TranslationSeed } from './Translation.seed';
import { CommandModule } from 'nestjs-command';
import { Module } from '@nestjs/common';

@Module({
  imports: [CommandModule, TranslationProvider],
  providers: [TranslationSeed],
  exports: [TranslationSeed, CommandModule],
})
export class TranslationSeedModule {}

import { TranslationController } from './Translation.controller';
import { TranslationService } from './Translation.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
})
export class TranslationModule {}

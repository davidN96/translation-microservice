import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { TranslationService } from './Translation.service';
import { Controller } from '@nestjs/common';
import { Patterns } from 'src/Utils/Patterns';
import * as DTO from './Translation.dto';

@Controller()
export class TranslationController {
  constructor(private readonly Translation: TranslationService) {}

  @MessagePattern(Patterns.Translate)
  public async translate(@Payload() data: DTO.TranslateMessage): Promise<string | null> {
    return await this.Translation.translate(data);
  }

  @EventPattern(Patterns.Overwrite)
  public async overwrite(@Payload() data: DTO.TranslationOverwrite): Promise<void> {
    return await this.Translation.overwrite(data);
  }
}

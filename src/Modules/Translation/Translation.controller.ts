import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Translation } from 'models/Translation/Translation.model';
import { TranslationService } from './Translation.service';
import { Patterns } from 'src/Utils/Patterns';
import { Controller } from '@nestjs/common';
import * as DTO from './Translation.dto';
import { Pagination } from 'src/Utils/Types';

@Controller()
export class TranslationController {
  constructor(private readonly Translation: TranslationService) {}

  @MessagePattern(Patterns.Translate)
  public async translate(@Payload() data: DTO.TranslateMessage): Promise<string | null> {
    return await this.Translation.translate(data);
  }

  @MessagePattern(Patterns.ListTranslations)
  public async listTranslations(@Payload() filters: DTO.ListFilters): Promise<Pagination<Translation>> {
    return await this.Translation.listTranslations(filters);
  }

  @EventPattern(Patterns.OverwriteTranslation)
  public async overwrite(@Payload() data: DTO.TranslationOverwrite): Promise<void> {
    return await this.Translation.overwrite(data);
  }

  @EventPattern(Patterns.AddTranslation)
  public async addTranslation(@Payload() data: Translation): Promise<void> {
    return await this.Translation.create(data);
  }
}

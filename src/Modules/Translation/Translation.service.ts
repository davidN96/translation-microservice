import { Translation, TRANSLATION } from 'models/Translation/Translation.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import * as DTO from './Translation.dto';
import { Model } from 'mongoose';

@Injectable()
export class TranslationService {
  constructor(@InjectModel(TRANSLATION) private readonly Translation: Model<Translation>) {}

  public async translate(message: DTO.TranslateMessage): Promise<string | null> {
    const translation = await this.Translation.findOne({ ...message });

    return translation ? translation.value : null;
  }

  public async overwrite(message: DTO.TranslationOverwrite): Promise<void> {
    await this.Translation.findOneAndUpdate(
      {
        key: message.key,
        language: message.language,
      },
      message,
    );
  }
}

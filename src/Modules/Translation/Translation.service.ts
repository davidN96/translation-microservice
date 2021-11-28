import { Translation, TRANSLATION } from 'models/Translation/Translation.model';
import { IssueService } from 'src/Modules/Issue/Issue.service';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import * as DTO from './Translation.dto';
import { Model } from 'mongoose';

@Injectable()
export class TranslationService {
  constructor(@InjectModel(TRANSLATION) private readonly Translation: Model<Translation>, private readonly Issue: IssueService) {}

  public async translate(message: DTO.TranslateMessage): Promise<string | null> {
    const translation = await this.Translation.findOne({ ...message });

    if (!translation) this.Issue.reportMissingTranslation(message);

    return translation ? translation.value : null;
  }

  public async overwrite({ key, language, value }: DTO.TranslationOverwrite): Promise<void> {
    await this.Translation.findOneAndUpdate({ key, language }, { key, language, value }).catch(() =>
      this.Issue.reportMissingTranslation({ key, language }),
    );
  }
}

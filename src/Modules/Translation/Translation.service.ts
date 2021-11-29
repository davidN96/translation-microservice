import { Translation, TRANSLATION } from 'models/Translation/Translation.model';
import { IssueService } from 'src/Modules/Issue/Issue.service';
import { useOptionalFilters, usePager, usePagination } from 'src/Utils/List';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import * as DTO from './Translation.dto';
import { Model } from 'mongoose';
import { Pagination } from 'src/Utils/Types';

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

  public async listTranslations({ filters, pager }: DTO.ListFilters): Promise<Pagination<Translation>> {
    const { skip, size } = usePager(pager);
    const data = await this.Translation.find(useOptionalFilters(filters)).skip(skip).limit(size);
    const total = await this.Translation.countDocuments(useOptionalFilters(filters));

    return usePagination<Translation>(data, total, pager.index);
  }
}

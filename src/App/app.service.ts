import { Translation, TRANSLATION } from 'models/Translation.model';
import { InjectModel } from '@nestjs/mongoose';
import { TranslateMessage } from './App.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TRANSLATION) private readonly Translation: Model<Translation>,
  ) {}

  public async translate(message: TranslateMessage): Promise<string> {
    return (await this.Translation.findOne({ ...message })).value;
  }
}

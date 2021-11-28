import { Translation, TRANSLATION } from 'models/Translation.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TRANSLATION) private readonly Translation: Model<Translation>,
  ) {}

  public getHello(message: string): string {
    return `Hello! Your message is: ${message}`;
  }
}

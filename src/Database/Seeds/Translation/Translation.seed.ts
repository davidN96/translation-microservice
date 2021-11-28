import { Translation, TRANSLATION } from 'models/Translation/Translation.model';
import { Injectable, Logger } from '@nestjs/common';
import { Providers } from 'src/Utils/Constants';
import { InjectModel } from '@nestjs/mongoose';
import Translations from 'src/Locales/index';
import { Command } from 'nestjs-command';
import { Model } from 'mongoose';

@Injectable()
export class TranslationSeed {
  constructor(
    @InjectModel(TRANSLATION) private readonly Translation: Model<Translation>,
  ) {}

  private async recreateTable(): Promise<void> {
    const collectionDocs: number = await this.Translation.count();

    if (collectionDocs) {
      Logger.log('Flushing docs collection...', Providers.DATABASE);
      try {
        await this.Translation.deleteMany({});
      } catch (e) {}
      Logger.log('Flushing successfully finished', Providers.DATABASE);
    }
  }

  private async loadData(): Promise<void> {
    Logger.log('Seeding translation database...', Providers.DATABASE);
    await this.Translation.create(Translations)
      .then(() =>
        Logger.log('Seeding successfully finished', Providers.DATABASE),
      )
      .catch(this.handleSeedingError);
  }

  private handleSeedingError(error: Error): void {
    Logger.error(error.message, Providers.DATABASE);
  }

  @Command({
    command: 'seed',
    describe: 'Seed translation database',
  })
  public async seed(): Promise<void> {
    await this.recreateTable();
    await this.loadData();
  }
}

import { TranslationModule } from 'src/Modules/Translation/Translation.module';
import { DatabaseModule } from 'src/Database/Database.module';
import { IssueModule } from 'src/Modules/Issue/Issue.module';
import { CacheModule } from 'src/Cache/Cache.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, CacheModule, TranslationModule, IssueModule],
})
export class AppModule {}

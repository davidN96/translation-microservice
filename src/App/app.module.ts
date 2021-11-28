import { TranslationModule } from 'src/Modules/Translation/Translation.module';
import { DatabaseModule } from 'src/Database/Database.module';
import { CacheModule } from 'src/Cache/Cache.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, CacheModule, TranslationModule],
})
export class AppModule {}

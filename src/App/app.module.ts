import { DatabaseModule } from 'src/Database/Database.module';
import { CacheModule } from 'src/Cache/Cache.module';
import { AppController } from './App.controller';
import { AppService } from './App.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

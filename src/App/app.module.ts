import { DatabaseModule } from 'src/Database/Database.module';
import { AppController } from './App.controller';
import { AppService } from './App.service';
import { Module } from '@nestjs/common';
@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { CommandModule, CommandService } from 'nestjs-command';
import { Providers } from './Utils/Constants';
import { AppModule } from './App/App.module';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    await app.select(CommandModule).get(CommandService).exec();
    await app.close();
  } catch (error) {
    Logger.error(error, Providers.DATABASE);
    await app.close();
    process.exit(1);
  }
}

bootstrap();

import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './App/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3333,
      },
    },
  );
  await app.listen();
}
bootstrap();

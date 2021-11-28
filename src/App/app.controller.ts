import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { AppService } from './App.service';

interface HelloPayload {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sayHello')
  public getHello(@Payload() data: HelloPayload): string {
    return this.appService.getHello(data.message);
  }
}

import { MessagePattern, Payload } from '@nestjs/microservices';
import { TranslateMessage } from './App.dto';
import { Controller } from '@nestjs/common';
import { AppService } from './App.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('translate')
  public async translate(@Payload() data: TranslateMessage): Promise<string> {
    return await this.appService.translate(data);
  }
}

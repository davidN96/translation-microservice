import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(message: string): string {
    return `Hello! Your message is: ${message}`;
  }
}

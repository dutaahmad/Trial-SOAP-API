import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('parser')
  getParser() {
    return {
      message: "get parser success",
      parser: this.appService.getParser(),
      parserType: typeof this.appService.getParser(),
    };
  }
}

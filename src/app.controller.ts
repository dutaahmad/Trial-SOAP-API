import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("soap-request")
  async soapRequest(
    @Body() body: {
      base_url: string,
      endpoint: string,
      soap_action: string,
      payload: object,
    }
  ) {
    console.log("start soapRequest. body: ", body);
    try {
      return await this.appService.fetchDataFromSOAPApi(body);
    } catch (error) {
      console.error("Error in soapRequest: ", error);
      throw error;
    }
  }
}

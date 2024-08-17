import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Parser } from './utils/xml-to-js';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Parser],
})
export class AppModule {}

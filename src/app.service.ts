import { Inject, Injectable } from '@nestjs/common';
import { Parser } from './utils/xml-to-js';

@Injectable()
export class AppService {

  constructor(
    @Inject(Parser) private readonly parser: Parser, // Inject the Parser
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  getParser() {
    return this.parser;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import Parser from './utils/xml-to-js';
import axios, { AxiosError } from 'axios';
import Formatter from './utils/formatter';

@Injectable()
export class AppService {
  constructor(
    @Inject(Parser) private readonly parser: Parser, // Inject the Parser

  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async fetchDataFromSOAPApi<BodyType = object>({
    base_url,
    endpoint,
    soap_action,
    payload
  }: {
    base_url: string,
    endpoint: string,
    soap_action: string,
    payload: BodyType
  }): Promise<any> {
    const headers = {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: soap_action,
    };
    const requestBody = Formatter.convertJsonToSoapRequest(base_url, payload as object);
    console.log("full URL : ", `${base_url}/${endpoint}`);
    try {
      const response = await axios.request({
        url: `${base_url}/${endpoint}`,
        method: "POST",
        headers,
        data: requestBody,
      });
      return Parser.convertXMLToJSON(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Axios Error : ", await Parser.convertXMLToJSON(error.response.data));
        throw await Parser.convertXMLToJSON(error.response.data);
      } else {
        console.error('Unknown Error while fetching data from API:', error);
        throw error;
      }
    }
  }

}

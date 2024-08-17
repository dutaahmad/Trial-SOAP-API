// src/services/TestPortService.ts
import { ISendMessageInput, ISendMessageOutput, ITestPortSoap } from '../../wsdl/TestService/TestPort';

export class TestPortService implements ITestPortSoap {
    SendMessage(
        input: ISendMessageInput,
        cb: (err: any | null, result: ISendMessageOutput, raw: string, soapHeader: { [k: string]: any }) => any,
        options?: any,
        extraHeaders?: any
    ): void {
        console.log("hitted", input);
        const response: ISendMessageOutput = {
            response: `Received: ${input.message}`,
        };

        // Assuming no error occurs
        cb(null, response, '', {});
    }
}

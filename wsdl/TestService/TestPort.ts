/* tslint:disable:max-line-length no-empty-interface */
export interface ISendMessageInput {
    /** xsd:string(undefined) */
    message: string;
}

export interface ISendMessageOutput {
    /** xsd:string(undefined) */
    response: string;
}

export interface ITestPortSoap {
    SendMessage: (input: ISendMessageInput, cb: (err: any | null, result: ISendMessageOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
}

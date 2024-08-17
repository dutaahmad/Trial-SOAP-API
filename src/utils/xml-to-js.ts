import jsonxml from "jsontoxml";
import { parseString, ParserOptions } from "xml2js";
import { promisify } from "util";

// Define the expected output type for the JSON result based on your XML structure
type XMLParsedResult = Record<string, any>; // Adjust this type to be more specific if you know the structure

// Manually define the callback type for parseString
type ParseStringCallback = (err: Error | null, result: XMLParsedResult) => void;

// Promisify parseString with the correct types for arguments and return value
const promisifiedParseString = promisify<string, ParserOptions, XMLParsedResult>(
    parseString as (xml: string, options: ParserOptions, callback: ParseStringCallback) => void
);

export class Parser {
    static parseJSONBodyToXML(jsonArgument: object): string {
        return jsonxml(jsonArgument, { html: true });
    }

    static async convertXMLToJSON(xmlMessage: string): Promise<XMLParsedResult> {
        const options: ParserOptions = { trim: true, explicitArray: false, explicitRoot: false };
        return promisifiedParseString(xmlMessage, options);
    }
}

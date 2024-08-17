import * as jsonxml from 'jsontoxml'; // Try namespace import
import { parseString, ParserOptions } from 'xml2js';
import { promisify } from 'util';

// Promisify parseString
const promisifiedParseString = promisify(parseString) as (xml: string, options: ParserOptions) => Promise<any>;

export default class Parser {
    static parseJSONBodyToXML(jsonArgument: object): string {
        return jsonxml(jsonArgument, { html: true }); // Ensure jsonxml is a function
    }

    static async convertXMLToJSON(xmlMessage: string): Promise<Record<string, any>> {
        const options: ParserOptions = { trim: true, explicitArray: false, explicitRoot: false };
        return promisifiedParseString(xmlMessage, options);
    }
}

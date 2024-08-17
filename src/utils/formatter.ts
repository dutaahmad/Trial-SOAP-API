import Parser from './xml-to-js'; // Ensure this is correct
import jsonxml from 'jsontoxml';

export default class Formatter {
    static convertJsonToSoapRequest(baseUrl: string, jsonArguments: object): string {
        // Replace any "https" with "http" in the namespace
        const correctedNamespace = baseUrl.replace(/^https:/, 'http:');
        console.log("passed json : ", jsonArguments);
        let soapBody = Parser.parseJSONBodyToXML(jsonArguments);
        return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="${correctedNamespace}/">
        <soap:Header/>
        <soap:Body>
            ${soapBody}
        </soap:Body>
    </soap:Envelope>`;
    }
}

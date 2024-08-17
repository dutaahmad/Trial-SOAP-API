import express, { Request, Response, Router } from 'express';

import { soap } from 'express-soap';
import { TestPortService } from '../services/TestPortService';

// Instantiate the service
const testPortService = new TestPortService();

const router = Router();

router.get("/", (req, res) => {
    return res.send("Express + TypeScript SOAP Server");
})

// Use the SOAP middleware for the Calculator service
router.post(
    'test-port',
    soap({
        services: { TestPortSoap: testPortService },
        wsdl: './sample.wsdl', // or use xml string here
        // endpoint: '/soap/test-port',
        endpoint: 'http://localhost:3000/soap/test-port',  // Use the full URL path
    })
);

export default router;
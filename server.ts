import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import soapEndpointsRouter from './src/routers/soap-endpoints';
import requestLogger from "./src/middlewares/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// apply middlewares
app.use(requestLogger);

app.use('/soap', soapEndpointsRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

console.log("Before app.listen");

try {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
} catch (error) {
    if (error instanceof Error) {
        console.error(`[server]: Error occurred while starting the server: ${error.message}`);
        process.exit(1);
    } else {
        console.error(`[server]: Unknown error occurred while starting the server: ${error}`);
        process.exit(1);
    }
}

console.log("After app.listen");

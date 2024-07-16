import express, { Application } from "express";
import config from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import debug from "debug";
import routes from "./routes";

const server: Application = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(routes);

server.listen(config.port, config.host, () => {
    console.log(`Service with port: ${config.port} is running.`);
});
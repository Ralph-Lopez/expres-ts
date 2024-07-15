import fs from "fs";

const nodeEnv = process.env.NODE_ENV || 'localhost';
const nodeEnvConfig = JSON.parse(fs.readFileSync(`./config/${nodeEnv}.json`, 'utf8'));

export default {
    host: process.env.SERVER_HOST || nodeEnvConfig.SERVER_HOST,
    port: process.env.SERVER_PORT || nodeEnvConfig.SERVER_PORT,
    dbHost: process.env.DB_HOST || nodeEnvConfig.DB_HOST,
    dbPort: process.env.DB_PORT || nodeEnvConfig.DB_PORT,
    dbName: process.env.DB_NAME || nodeEnvConfig.DB_NAME,
    dbUsername: process.env.DB_USERNAME || nodeEnvConfig.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD || nodeEnvConfig.DB_PASSWORD,
}
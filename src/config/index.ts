import dotenv from "dotenv";

dotenv.config()

export default {
    host: process.env.SERVER_HOST || "localhost",
    port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 8080,
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: process.env.DB_PORT || 3306,
    dbName: process.env.DB_NAME || "TEST_DB",
    dbUsername: process.env.DB_USERNAME || "root",
    dbPassword: process.env.DB_PASSWORD || "",
}
import { Sequelize } from "sequelize";
import config from "./config";

const conn = new Sequelize(
    config.dbName,
    config.dbUsername,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: "mysql",
        define: {
            timestamps: false
        }
    }
)

//Optional
// conn.addHook('beforeConnect', () => {
    //Authenticate Connection
// });

export default {
    conn,
}
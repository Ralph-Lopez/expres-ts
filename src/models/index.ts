import Sequelize from "sequelize";
import db from "../dbConnection";

import testModel from "./test.model";

const dbQuery = {
    TESTING: testModel.TESTING(db.conn, Sequelize.DataTypes),
};

export default
{
    dbQuery
}
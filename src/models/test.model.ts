import { Sequelize, DataTypes } from "sequelize";

const TESTING = async (db: Sequelize, dataTypes: typeof DataTypes) => {
    return db.define(
      "TESTING",
      {
        TEST_ID: {
          allowNull: false,
          autoIncrement: true,
          field: "TEST_ID",
          primaryKey: true,
          type: dataTypes.BIGINT
        },
        TEST_VALUE: {
          allowNull: true,
          defaultValue: "",
          field: "TEST_VALUE",
          type: dataTypes.STRING(20)
        }
      },
      { tableName: "TESTING" }
    );
};

export default {
    TESTING
}
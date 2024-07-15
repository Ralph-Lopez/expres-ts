import { Request } from "express";
import model from "../models"
import { QueryTypes } from "sequelize";
import db from "../dbConnection";

const getAllTest = async (): Promise<Object[]> => {
    return (await model.dbQuery.TESTING).findAll()
        .then(results => {
            return results = JSON.parse(JSON.stringify(results))
        })
        .catch(() => {
            return []
        });
}

const getTest = async (req: Request): Promise<Object[]> => {
    var condition = {
        TEST_ID: req.body.Id,
    };
    return (await model.dbQuery.TESTING).findOne({
        where: condition
    })
        .then(results => {
            return results = JSON.parse(JSON.stringify(results))
        })
        .catch(() => {
            return []
        });
}

const getAllTestRawQuery = async (): Promise<Object[]> => {
    return db.conn.query("SELECT * FROM `TESTING`", {
        type: QueryTypes.SELECT,
        //raw = false if if you have existing schema in /models
        raw: true
    }).then(results => {
        return results = JSON.parse(JSON.stringify(results))
    })
    .catch(() => {
        return []
    });
}

const getTestRawQuery = async (req: Request): Promise<Object[]> => {
    return db.conn.query("SELECT * FROM `TESTING` WHERE TEST_ID = :TEST_ID", {
        type: QueryTypes.SELECT,
        replacements: { TEST_ID:  req.body.Id},
        //raw = false if if you have existing schema in /models
        raw: true
    }).then(results => {
        return results = JSON.parse(JSON.stringify(results))
    })
    .catch(() => {
        return []
    });
}
export default {
    getAllTest,
    getTest,
    getAllTestRawQuery,
    getTestRawQuery
}
import { Request, Response } from "express";
import db from "../dbConnection";

const HealthCheck = async (req: Request, res: Response) => {
    await db.conn.authenticate().then(() => {
        return res.status(200).send("Service is running.");
    }).catch(() => {
        return res.status(500).send("Service is down.");
    });
}

export default {
    HealthCheck
}

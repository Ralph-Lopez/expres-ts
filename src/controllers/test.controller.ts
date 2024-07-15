import { Request, Response } from "express";
import resBuilder from "../utils/responseBuilder.util";
import service from "../services/test.service";

const helloWorld = async (req: Request, res: Response) => {
    return res.status(200).send(
        await resBuilder.dynamicResponse(true, "Hello World.", {})
    );
}

const getAllTest = async (req: Request, res: Response) => {
    const result = await service.getAllTest();
    return res.status(200).send(
        await resBuilder.dynamicResponse(true, "Information has been retrieved.", result)
    );
}

const getTest = async (req: Request, res: Response) => {
    const result = await service.getTest(req);
    return res.status(200).send(
        await resBuilder.dynamicResponse(true, "Information has been retrieved.", result)
    );
}

const getAllTestRawQuery = async (req: Request, res: Response) => {
    const result = await service.getAllTestRawQuery();
    return res.status(200).send(
        await resBuilder.dynamicResponse(true, "Information has been retrieved.", result)
    );
}

const getTestRawQuery = async (req: Request, res: Response) => {
    const result = await service.getTestRawQuery(req);
    return res.status(200).send(
        await resBuilder.dynamicResponse(true, "Information has been retrieved.", result)
    );
}

export default {
    helloWorld,
    getAllTest,
    getTest,
    getAllTestRawQuery,
    getTestRawQuery
}

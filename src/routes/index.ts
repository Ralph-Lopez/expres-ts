import express, { Router, Request, Response, NextFunction } from "express";
import resBuilder from "../utils/responseBuilder.util";
import { ValidationError } from 'express-validation';
import testRoute from "./test.route";
import healthCheckRoute from "./healthCheck.route";

const router: Router = express();

router.use("/HealthCheck", healthCheckRoute);
router.use("/test", testRoute);

router.use(async (req: Request, res: Response) => {
    return res.status(404).send(await resBuilder.dynamicResponse(false, "Not found.", {}));
});

router.use(async (err: ValidationError, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(err.statusCode).send(
            await resBuilder.dynamicResponse(false, `${err.details.body?.map((detail: any) => detail.context.label)} is required.`, {}));
    }

    return res.status(500).json(resBuilder.dynamicResponse(false, "Internal error occurred.", {}));
});

export default router;
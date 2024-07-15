import express, { Router } from "express";
import controller from "../controllers/healthCheck.controller";

const router: Router = express();

router.get("/", controller.healthCheck);

export default router;
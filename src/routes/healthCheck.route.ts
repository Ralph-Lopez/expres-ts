import express, { Router } from "express";
import controller from "../controllers/healthCheck.controller";

const router: Router = express();

router.get("/", controller.HealthCheck);

export default router;
import express, { Router } from "express";
import { validate } from "express-validation";
import validation from "../validations/test.validation";
import controller from "../controllers/test.controller";

const router: Router = express();

router.get("/", controller.helloWorld);
router.get("/GetAllTest", controller.getAllTest);
router.post("/GetTest", validate(validation.getTest), controller.getTest)
router.get("/GetAllTestRawQuery", controller.getAllTestRawQuery)
router.post("/GetTestRawQuery", validate(validation.getTestRawQuery), controller.getTest)

export default router;
import { Joi } from "express-validation";
import resBuilder from "../utils/responseBuilder.util"

const getTest = {
    body: Joi.object({
      Id: Joi.string().required()
    })
}

const getTestRawQuery = {
    body: Joi.object({
      Id: Joi.string().required()
    })
}

export default {
    getTest,
    getTestRawQuery
}
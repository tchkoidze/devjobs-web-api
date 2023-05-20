import express from "express";
import { getJobListForPage } from "../controllers/devjobslist-controller.js";

const jobListRouter = express.Router();

jobListRouter.get("/joblist/:size/:page", getJobListForPage);
console.log(getJobListForPage);
export default jobListRouter;

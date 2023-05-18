import express from "express";
import { getAllJobList } from "../controllers/devjobslist-controller.js";

const jobListRouter = express.Router();

jobListRouter.get("/joblist", getAllJobList);

export default jobListRouter;

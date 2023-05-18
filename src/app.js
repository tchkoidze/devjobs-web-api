import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import jobListRouter from "./routs/joblist-router.js";
import swaggerMiddleWare from "../middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", jobListRouter);
app.use("/", ...swaggerMiddleWare());

app.listen(5555);

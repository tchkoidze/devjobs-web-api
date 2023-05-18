import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import jobListRouter from "./routs/joblist-router.js";
import swaggerMiddleWare from "../middlewares/swagger-middleware.js";
import cors from "cors";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", jobListRouter);
app.use("/", ...swaggerMiddleWare());

app.listen(process.env.PORT || 5555);

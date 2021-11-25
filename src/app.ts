import express, { Application } from "express";
import mongoose from "mongoose";
import { ConnectionOptions } from "tls";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config/config";
import userRouter from "./routers/user";

const app: Application = express();

mongoose
  .connect(config.mongo.url, config.mongo.options as ConnectionOptions)
  .then(() => console.log("DB Connected."));

app.use(bodyParser.json());
app.use(cors());

app.use("/api", userRouter);

app.listen(config.server.port, () =>
  console.log(
    `Service is running on port ${config.server.hostname}:${config.server.port}.`
  )
);

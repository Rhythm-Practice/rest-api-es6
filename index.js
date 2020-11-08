import express from "express";
import consign from "consign";
import cors from "cors";

const app = express();

app.use(cors());

consign()
  .include("libs/middlewares.js")
  .then("routes")
  .include("libs/boots.js")
  .into(app);

import serverless from "serverless-http";
import express from "express";
import userRouter from "./src/routers/user.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello Rebb Tech, Welcome to Lambda!!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "404 Not Found",
  });
});

export const handler = serverless(app);

import express, { Request, Response } from "express";
import cors from "cors";
import "./socket";
import { corsConfig } from "./config";

export const app = express();

app.use(express.json());
app.use(cors(corsConfig));

app.get("/", (req: Request, res: Response) => {
  return res.json({
    yes: "working",
  });
});

app.listen(8001, () => {
  console.log("Server started successfully.");
});

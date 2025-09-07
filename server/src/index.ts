import express, { Request, Response } from "express";
import cors from "cors";
import "./socket";

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    yes: "working",
  });
});

app.listen(8001, () => {
  console.log("Server started successfully.");
});

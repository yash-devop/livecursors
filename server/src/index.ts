import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({
    yes: "working",
  });
});

app.listen(8000, () => {
  console.log("Server started successfully.");
});

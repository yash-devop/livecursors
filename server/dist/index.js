// src/index.ts
import express from "express";
var app = express();
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({
    yes: "working"
  });
});
app.listen(8e3, () => {
  console.log("Server started successfully.");
});

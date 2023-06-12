import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 5500;

app.get("/", (req: Request, res: Response) => {
  res.send("Ready!");
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}"`);
});

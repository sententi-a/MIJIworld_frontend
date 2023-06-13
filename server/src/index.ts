import { AppDataSource } from "./data-source";
import { Express, Response, Request } from "express";
import express from "express";
import "reflect-metadata";

const app: Express = express();
const port = process.env.PORT || 5500;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is ready!");
});

app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`);
});

// Connect to mysql DB
AppDataSource.initialize().then(() => console.log("DB connection success"));

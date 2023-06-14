import { AppDataSource } from "./data-source";
import { Express, Response, Request } from "express";
import express from "express";
import "reflect-metadata";

import { Restaurant } from "./entity/Restaurant";
import { Pin } from "./entity/Pin";
import { Color } from "./entity/Color";
import { Menu } from "./entity/Menu";

// export const restRepo = AppDataSource.getRepository(Restaurant);
// export const pinRepo = AppDataSource.getRepository(Pin);
// export const colorRepo = AppDataSource.getRepository(Color);
// export const menuRepo = AppDataSource.getRepository(Menu);

const app: Express = express();
const port = process.env.PORT || 5500;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is ready!");
});

app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`);
});

// Connect to mysql DB
AppDataSource.initialize().then(() => {
  console.log("DB connection success");
  //   setupDBfromExcel();
  //   setupMap();
  setupKakaoReviewInfo();
});

// ***** DB Setup (from xlsx file) *****
import {
  setupDBfromExcel,
  setupMap,
  setupKakaoReviewInfo,
} from "./jobs/db-setup";

// setupMap();

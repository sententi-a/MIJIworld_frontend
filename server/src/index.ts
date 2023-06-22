import { AppDataSource } from "./data-source";
import { Express, Response, Request } from "express";
import express from "express";
import "reflect-metadata";

const cors = require("cors");
const app: Express = express();
const port = process.env.PORT || 5500;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is ready!");
});

app.listen(port, () => {
  console.log(`***** Server is listening at localhost:${port} *****`);
});

app.get("/restaurants", async (req: Request, res: Response) => {
  const filter = String(req.query.q);
  const data = await getRestaurantData(filter);

  res.send(data);
});

app.get("/pins", async (req: Request, res: Response) => {
  const data = await getAllPinData();
  res.send(data);
});

app.get("/restaurant/dialog/:name", async (req: Request, res: Response) => {
  const data = await getRestDialogData(req.params.name);
  res.send(data);
});

app.get("/restaurant/:name", async (req: Request, res: Response) => {
  const data = await getRestBasicData(req.params.name);
  res.send(data);
});

app.get("/restaurant/color/:name", async (req: Request, res: Response) => {
  const data = await getColorData(req.params.name);
  res.send(data);
});

app.get("/restaurant/map/:name", async (req: Request, res: Response) => {
  const data = await getMapData(req.params.name);
  res.send(data);
});

app.get(
  "/restaurant/reviews/kakao/:name",
  async (req: Request, res: Response) => {
    const data = await getKakaoReviews(req.params.name);
    res.send(data);
  }
);
app.get("/restaurant/menus/:name", async (req: Request, res: Response) => {
  const data = await getMenus(req.params.name);
  res.send(data);
});

// ***** DB Setup *****
import {
  setupDBfromExcel,
  setupMap,
  setupKakaoReview,
  scrapNaverReviews,
} from "./jobs/db-setup";

import {
  getRestaurantData,
  getRestDialogData,
  getRestBasicData,
} from "./controllers/restaurant";
import { getAllPinData } from "./controllers/pin";
import { getColorData } from "./controllers/color";
import { getMapData } from "./controllers/map";
import { getKakaoReviews } from "./controllers/review";
import { getMenus } from "./controllers/menu";

// Connect to mysql DB
AppDataSource.initialize().then(() => {
  console.log("***** DB connection success *****");
  //   setupDBfromExcel();
  //   setupMap();
  //   setupKakaoReview();
  //   scrapNaverReviews();
  // getAllRestaurantData();
});

// setupMap();

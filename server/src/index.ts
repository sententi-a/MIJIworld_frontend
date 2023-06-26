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

app.get("/restaurant/ticket/:restName", async (req: Request, res: Response) => {
  const restName = req.params.restName.toString();
  const date = req.query.date ? req.query.date.toString() : "";
  const name = req.query.name ? req.query.name.toString() : "";
  const company = req.query.company ? req.query.company.toString() : "";
  const note = req.query.note ? req.query.note.toString() : "";
  const message = req.query.message ? req.query.message.toString() : "";

  try {
    const ticketImage = await getTicket(
      restName,
      date,
      name,
      company,
      note,
      message
    );

    res.setHeader("Content-Type", "image/png");
    res.send(ticketImage);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
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
//TODO: index.ts 만들어서 controller 통합
import { getAllPinData } from "./controllers/pin";
import { getColorData } from "./controllers/color";
import { getMapData } from "./controllers/map";
import { getKakaoReviews } from "./controllers/review";
import { getMenus } from "./controllers/menu";
import { getTicket } from "./controllers/ticket";

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

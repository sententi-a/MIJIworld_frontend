const readExcelFile = require("read-excel-file/node");
require("dotenv").config();

import { AppDataSource } from "../data-source";
import { Restaurant, Pin, Color, Menu, Map } from "../entity/index";
import axios from "axios";
const cheerio = require("cheerio");

export const restRepo = AppDataSource.getRepository(Restaurant);
export const pinRepo = AppDataSource.getRepository(Pin);
export const colorRepo = AppDataSource.getRepository(Color);
export const menuRepo = AppDataSource.getRepository(Menu);
export const mapRepo = AppDataSource.getRepository(Map);

const filename = __dirname + "/../restInfos.xlsx";

const getRestInfoData = async () => {
  const restDatas = [];
  const menuDatas = [];
  const colorDatas = [];
  const pinDatas = [];

  try {
    const rows = await readExcelFile(filename);

    rows.forEach((row, idx) => {
      if (idx !== 0) {
        const restData = {
          en_name: row[1],
          kr_name: row[13],
          country: row[6],
          country_word: row[12],
          address: row[7],
          business_hour: row[8],
          introduction: row[9] + "\n" + row[10],
        };
        restDatas.push(restData);

        let order = 1;
        for (let i = 14; i <= 25; i += 4) {
          if (!row[i]) break;
          const menuData = {
            rest_name: row[1],
            order,
            name: row[i],
            description: row[i + 1] + "\n" + row[i + 2],
            price: parseInt(row[i + 3]),
          };
          menuDatas.push(menuData);
          order += 1;
        }

        const colorData = {
          rest_name: row[1],
          header_color: row[4],
          text_color: row[5],
        };
        colorDatas.push(colorData);

        const pinData = {
          rest_name: row[1],
          top: row[29],
          left: row[30],
        };
        pinDatas.push(pinData);
      }
    });
    return { restDatas, menuDatas, colorDatas, pinDatas };
  } catch (error) {
    console.error("Cannot read Excel File: " + error);
  }
};

export const setupDBfromExcel = async () => {
  try {
    const { restDatas, menuDatas, colorDatas, pinDatas } =
      await getRestInfoData();
    setupRestaurant(restDatas);
    setupMenu(menuDatas);
    setupColor(colorDatas);
    setupPin(pinDatas);
  } catch (error) {
    console.error(error);
  }
};

const setupRestaurant = (datum) => {
  datum.forEach((data) => {
    const each = restRepo.save(data);
  });
};

const setupMenu = (datum) => {
  datum.forEach((data) => {
    const each = menuRepo.save(data);
  });
};

const setupColor = (datum) => {
  datum.forEach((data) => {
    const each = colorRepo.save(data);
  });
};

const setupPin = (datum) => {
  datum.forEach((data) => {
    const each = pinRepo.save(data);
  });
};

export const setupMap = async () => {
  try {
    const datum = await AppDataSource.manager.find(Restaurant, {});
    datum.forEach(async (data) => {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?category_group_code=FD6&query=${data.kr_name}`,
        { headers: { Authorization: process.env.KAKAO_MAP_REST_API } }
      );
      const document = response.data.documents[0];
      console.log(document);

      if (document) {
        const mapInfo = {
          rest_name: data.en_name,
          kr_name: data.kr_name,
          map_id: document.id,
        };
        // mapRepo.save(mapInfo);
      }
    });
  } catch (error) {
    console.error(error);
    console.log("에러 발생");
  }
};

export const setupKakaoReviewInfo = async () => {
  try {
    const datum = await AppDataSource.manager.find(Restaurant, {});
    datum.forEach(async (data) => {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?category_group_code=FD6&query=${data.kr_name}`,
        { headers: { Authorization: process.env.KAKAO_MAP_REST_API } }
      );
      const document = response.data.documents[0];

      if (document) {
        const placeUrl = document.place_url;
        const $ = cheerio.load(placeUrl);
        const score = $(
          "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(3) > span.color_b"
        );

        console.log(score);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

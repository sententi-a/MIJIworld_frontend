import axios from "axios";
import { AppDataSource } from "../data-source";
import { Restaurant, Color } from "../entity";

export const getAllRestaurantData = async () => {
  try {
    const allData = await AppDataSource.manager.find(Restaurant, {});
    return allData;
  } catch (error) {
    console.error(error);
  }
};

export const getRestDialogData = async (name: string) => {
  try {
    const restData = await AppDataSource.manager.findOne(Restaurant, {
      where: { en_name: name },
    });
    const colorData = await AppDataSource.manager.findOne(Color, {
      where: { rest_name: restData },
    });

    const result = { ...restData, ...colorData };
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const getRestBasicData = async (name: string) => {
  try {
    const data = await AppDataSource.manager.findOne(Restaurant, {
      where: { en_name: name },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

import axios from "axios";
import { AppDataSource } from "../data-source";
import { Restaurant } from "../entity";

export const getAllRestaurantData = async () => {
  try {
    const allData = await AppDataSource.manager.find(Restaurant, {});
    return allData;
  } catch (error) {
    console.error(error);
  }
};

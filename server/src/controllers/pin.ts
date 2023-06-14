import { AppDataSource } from "../data-source";
import { Pin } from "../entity";

const pinRepo = AppDataSource.getRepository(Pin);

export const getAllPinData = async () => {
  try {
    const allData = await pinRepo
      .createQueryBuilder("p")
      .select(["p.top", "p.left", "r.en_name"])
      .leftJoin("p.rest_name", "r")
      .where("p.rest_name = r.en_name")
      .getMany();
    // const allData = await AppDataSource.manager.find(Pin, {});
    return allData;
  } catch (e) {
    console.error(e);
  }
};

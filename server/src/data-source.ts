import "reflect-metadata";
import { DataSource } from "typeorm";

// Use env variable
require("dotenv").config();

const password = process.env.DB_PASSWORD || "dnfl*7020";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: password,
  database: "MIJIworld",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});

import "reflect-metadata";
import { DataSource } from "typeorm";

// Use env variable
require("dotenv").config();

const password = process.env.DB_PASSWORD;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: password,
  database: "MIJIworld",
  synchronize: false,
  logging: true,
  entities: ["src/entity/*"],
  migrations: ["src/migration/*"],
  subscribers: [],
});

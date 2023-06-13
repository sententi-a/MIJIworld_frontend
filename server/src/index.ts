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
// AppDataSource.initialize()
//   .then(async () => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await AppDataSource.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await AppDataSource.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log(
//       "Here you can setup and run express / fastify / any other framework."
//     );
//   })
//   .catch((error) => console.log(error));

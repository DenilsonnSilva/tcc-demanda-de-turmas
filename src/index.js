import express from "express";
import cors from "cors";
import "dotenv/config";

import sequelize from "./services/database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/healthz", (req, res) => {
  res.status(200).json({ message: "O servidor está respondendo!" });
});

sequelize.sync({ force: false });

app.listen(process.env.PORT, () => {
  console.log(`Running server on port ${process.env.PORT}`);
});

import express from "express";
import cors from "cors";
import "dotenv/config";

import sequelize from "./services/database.js";

import classesRoutes from "./routes/classesRoutes.js";
import classroomsRoutes from "./routes/classroomsRoutes.js";
import coursesRoutes from "./routes/coursesRoutes.js";
import disciplinesRoutes from "./routes/disciplinesRoutes.js";
import teachersRoutes from "./routes/teachersRoutes.js";
import termsRoutes from "./routes/termsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", classesRoutes);
app.use("/", classroomsRoutes);
app.use("/", coursesRoutes);
app.use("/", disciplinesRoutes);
app.use("/", teachersRoutes);
app.use("/", termsRoutes);
app.use("/", usersRoutes);

app.get("/healthz", (req, res) => {
  res.status(200).json({ message: "O servidor está respondendo!" });
});

sequelize.sync();

app.listen(process.env.PORT, () => {
  console.log(`Running server on port ${process.env.PORT}`);
});

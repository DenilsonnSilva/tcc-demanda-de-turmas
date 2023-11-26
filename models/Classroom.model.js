import { DataTypes } from "sequelize";
import sequelize from "../services/database";

const Classroom = sequelize.define(
  "Classroom",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Nome não pode ser vazio." },
      },
    },
  },
  { underscored: true }
);

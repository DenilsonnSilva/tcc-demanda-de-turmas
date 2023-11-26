import { DataTypes } from "sequelize";
import sequelize from "../services/database";

const Discipline = sequelize.define(
  "Discipline",
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

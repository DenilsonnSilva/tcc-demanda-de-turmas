import { DataTypes } from "sequelize";
import sequelize from "../services/database.js";

const Teacher = sequelize.define(
  "teacher",
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

export default Teacher;

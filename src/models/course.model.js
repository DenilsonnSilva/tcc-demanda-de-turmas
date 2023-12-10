import { DataTypes } from "sequelize";
import sequelize from "../services/database.js";

const Course = sequelize.define(
  "course",
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

export default Course;

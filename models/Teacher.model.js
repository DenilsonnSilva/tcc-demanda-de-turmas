import { DataTypes } from "sequelize";
import sequelize from "../services/database";

const Teacher = sequelize.define(
  "Teacher",
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

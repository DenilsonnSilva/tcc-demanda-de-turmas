import { DataTypes } from "sequelize";
import sequelize from "../services/database";

const Term = sequelize.define(
  "Term",
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

export default Term;

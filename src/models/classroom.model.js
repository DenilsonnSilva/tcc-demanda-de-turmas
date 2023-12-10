import { DataTypes } from "sequelize";
import sequelize from "../services/database.js";

const Classroom = sequelize.define(
  "classroom",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Nome não pode ser vazio." },
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Capacidade de alunos não pode ser vazia." },
      },
    },
    supportsMaterials: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Classroom;

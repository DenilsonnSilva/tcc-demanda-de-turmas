import Classroom from "../models/classroom.model.js";
import { Op } from "sequelize";

const create = async (req, res) => {
  try {
    const { name, studentsQuantity, supportsMaterials } = req.body;

    const newClassroom = await Classroom.create({
      name,
      studentsQuantity,
      supportsMaterials,
    });

    return res.status(201).json(newClassroom);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAvailable = async (req, res) => {
  try {
    const { students, materials } = req.query;

    const whereClause = {
      students_quantity: {
        [Op.gte]: students,
      },
    };

    if (materials === "true") {
      whereClause.supports_materials = true;
    }

    const classrooms = await Classroom.findAll({
      where: whereClause,
    });
    
    res.status(200).json(classrooms);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();

    res.status(200).json(classrooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { classroomId } = req.params;

    const classroom = await Classroom.findByPk(classroomId);

    if (classroom) {
      return res.status(200).json({ classroom });
    } else {
      return res.status(404).json({ message: "Sala não encontrada." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { name } = req.body;

    const classroom = await Classroom.findByPk(classroomId);

    if (classroom) {
      await classroom.update({ name });

      return res.status(200).json(classroom);
    } else {
      return res.status(404).json({ message: "Sala não encontrada." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const dеlete = async (req, res) => {
  try {
    const { classroomId } = req.params;

    const classroom = await Classroom.findByPk(classroomId);

    if (classroom) {
      await classroom.destroy();

      return res.status(200).json({ message: "Sala deletada com sucesso." });
    } else {
      return res.status(404).json({ message: "Sala não encontrada." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export default { create, getAvailable, getAll, getOne, update, dеlete };

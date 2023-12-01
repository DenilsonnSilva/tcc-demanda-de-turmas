import Classroom from "../models/classroom.model.js";

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const newClassroom = await Classroom.create({ name });

    return res.status(201).json(newClassroom);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const read = async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();

    res.status(200).json(classrooms);
  } catch (error) {
    console.log(error);
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

export default { create, read, update, dеlete };

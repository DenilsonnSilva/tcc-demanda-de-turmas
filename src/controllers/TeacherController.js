import Teacher from "../models/teacher.model";

const createTeacher = async (req, res) => {
  try {
    const { name } = req.body;

    const newTeacher = await Teacher.create({ name });

    return res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const readTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();

    res.status(200).json(teachers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { name } = req.body;

    const teacher = await Teacher.findByPk(teacherId);

    if (teacher) {
      await teacher.update({ name });

      return res.status(200).json(teacher);
    } else {
      return res.status(404).json({ message: "Professor não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { teacherId } = req.params;

    const teacher = await Teacher.findByPk(teacherId);

    if (teacher) {
      await teacher.destroy();

      return res.status(200).json({
        message: "Professor deletado com sucesso.",
      });
    } else {
      return res.status(404).json({ message: "Professor não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export { createTeacher, readTeacher, updateTeacher, deleteTeacher };

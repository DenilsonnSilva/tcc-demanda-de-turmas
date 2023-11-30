import Class from "../models/class.model";

const create = async (req, res) => {
  try {
    const { classroomId, courseId, disciplineId, teacherId, termId } = req.body;

    const newClass = await Class.create({
      classroomId,
      courseId,
      disciplineId,
      teacherId,
      termId,
    });

    return res.status(201).json(newClass);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const read = async (req, res) => {
  try {
    const classes = await Class.findAll();

    res.status(200).json(classes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { classId } = req.params;
    const { name } = req.body;

    const сlass = await Class.findByPk(classId);

    if (сlass) {
      await сlass.update({ name });

      return res.status(200).json(сlass);
    } else {
      return res.status(404).json({ message: "Turma não encontrada." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const dеlete = async (req, res) => {
  try {
    const { classId } = req.params;

    const сlass = await Class.findByPk(classId);

    if (сlass) {
      await сlass.destroy();

      return res.status(200).json({ message: "Turma deletada com sucesso." });
    } else {
      return res.status(404).json({ message: "Turma não encontrada." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export default { create, read, update, dеlete };

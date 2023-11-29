import Discipline from "../models/discipline.model";

const createDiscipline = async (req, res) => {
  try {
    const { name } = req.body;

    const newDiscipline = await Discipline.create({ name });

    return res.status(201).json(newDiscipline);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const readDiscipline = async (req, res) => {
  try {
    const disciplines = await Discipline.findAll();

    res.status(200).json(disciplines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateDiscipline = async (req, res) => {
  try {
    const { disciplineId } = req.params;
    const { name } = req.body;

    const discipline = await Discipline.findByPk(disciplineId);

    if (discipline) {
      await discipline.update({ name });

      return res.status(200).json(discipline);
    } else {
      return res.status(404).json({ message: "Disciplina não encontrada." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteDiscipline = async (req, res) => {
  try {
    const { disciplineId } = req.params;

    const discipline = await Discipline.findByPk(disciplineId);

    if (discipline) {
      await discipline.destroy();

      return res.status(200).json({
        message: "Disicplina deletada com sucesso.",
      });
    } else {
      return res.status(404).json({ message: "Disciplina não encontrada." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export { createDiscipline, readDiscipline, updateDiscipline, deleteDiscipline };

import Term from "../models/term.model.js";

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const newTerm = await Term.create({ name });

    return res.status(201).json(newTerm);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const terms = await Term.findAll();

    res.status(200).json(terms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { termId } = req.params;

    const term = await Term.findByPk(termId);

    if (term) {
      return res.status(200).json(term);
    } else {
      return res.status(404).json({ message: "Período não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { termId } = req.params;
    const { name } = req.body;

    const term = await Term.findByPk(termId);

    if (term) {
      await term.update({ name });

      return res.status(200).json(term);
    } else {
      return res.status(404).json({ message: "Período não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const dеlete = async (req, res) => {
  try {
    const { termId } = req.params;

    const term = await Term.findByPk(termId);

    if (term) {
      await term.destroy();

      return res.status(200).json({
        message: "Período deletado com sucesso.",
      });
    } else {
      return res.status(404).json({ message: "Período não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export default { create, getAll, getOne, update, dеlete };

import Course from "../models/course.model";

const createCourse = async (req, res) => {
  try {
    const { name } = req.body;

    const newCourse = await Course.create({ name });

    return res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const readCourse = async (req, res) => {
  try {
    const courses = await Course.findAll();

    res.status(200).json(courses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name } = req.body;

    const course = await Course.findByPk(courseId);

    if (course) {
      await course.update({ name });

      return res.status(200).json(course);
    } else {
      return res.status(404).json({ message: "Curso não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findByPk(courseId);

    if (course) {
      await course.destroy();

      return res.status(200).json({ message: "Curso deletado com sucesso." });
    } else {
      return res.status(404).json({ message: "Curso não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export { createCourse, readCourse, updateCourse, deleteCourse };

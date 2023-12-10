import sequelize from "../services/database.js";

import Classroom from "./classroom.model.js";
import Course from "./course.model.js";
import Discipline from "./discipline.model.js";
import Teacher from "./teacher.model.js";
import Term from "./term.model.js";

const Class = sequelize.define("Class", {}, { underscored: true });

Class.belongsTo(Classroom, { foreignKey: { allowNull: false } });
Classroom.hasMany(Class, { foreignKey: "classroomId" });

Class.belongsTo(Course, { foreignKey: { allowNull: false } });
Course.hasMany(Class, { foreignKey: "courseId" });

Class.belongsTo(Discipline, { foreignKey: { allowNull: false } });
Discipline.hasMany(Class, { foreignKey: "disciplineId" });

Class.belongsTo(Teacher, { foreignKey: { allowNull: false } });
Teacher.hasMany(Class, { foreignKey: "teacherId" });

Class.belongsTo(Term, { foreignKey: { allowNull: false } });
Term.hasMany(Class, { foreignKey: "termId" });

export default Class;

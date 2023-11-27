import sequelize from "../services/database.js";

import Classroom from "./classroom.model.js";
import Course from "./course.model.js";
import Discipline from "./discipline.model.js";
import Teacher from "./teacher.model.js";
import Term from "./term.model.js";

const Class = sequelize.define("Class", {}, { underscored: true });

Class.belongsTo(Classroom);
Classroom.hasMany(Class, { foreignKey: "classroomId" });

Class.belongsTo(Course);
Course.hasMany(Class, { foreignKey: "courseId" });

Class.belongsTo(Discipline);
Discipline.hasMany(Class, { foreignKey: "disciplineId" });

Class.belongsTo(Teacher);
Teacher.hasMany(Class, { foreignKey: "teacherId" });

Class.belongsTo(Term);
Term.hasMany(Class, { foreignKey: "termId" });

export default Class;

import sequelize from "../services/database";

import Classroom from "./Classroom.model";
import Course from "./Course.model";
import Discipline from "./Discipline.model";
import Teacher from "./Teacher.model";

const Class = sequelize.define("Class", {}, { underscored: true });

Class.belongsTo(Classroom);
Classroom.hasMany(Class, { foreignKey: "classroomId" });

Class.belongsTo(Course);
Course.hasMany(Class, { foreignKey: "courseId" });

Class.belongsTo(Discipline);
Discipline.hasMany(Class, { foreignKey: "disciplineId" });

Class.belongsTo(Teacher);
Teacher.hasMany(Class, { foreignKey: "teacherId" });

export default Class;

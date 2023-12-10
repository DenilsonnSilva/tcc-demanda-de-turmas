import sequelize from "../services/database.js";

import Classroom from "./classroom.model.js";
import Course from "./course.model.js";
import Discipline from "./discipline.model.js";
import Teacher from "./teacher.model.js";
import Term from "./term.model.js";

const Class = sequelize.define("class", {}, { underscored: true });

Classroom.hasMany(Class, { foreignKey: { allowNull: false } });
Class.belongsTo(Classroom);

Course.hasMany(Class, { foreignKey: { allowNull: false } });
Class.belongsTo(Course);

Discipline.hasMany(Class, { foreignKey: { allowNull: false } });
Class.belongsTo(Discipline);

Teacher.hasMany(Class, { foreignKey: { allowNull: false } });
Class.belongsTo(Teacher);

Term.hasMany(Class, { foreignKey: { allowNull: false } });
Class.belongsTo(Term);

export default Class;

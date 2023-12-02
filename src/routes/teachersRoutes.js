import { Router } from "express";
import teacherController from "../controllers/TeacherController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/professor")
  .get(UserAuthentication, teacherController.getAll)
  .post(UserAuthentication, teacherController.create);

router
  .route("/api/professor/:teacherId")
  .get(UserAuthentication, teacherController.getOne)
  .put(UserAuthentication, teacherController.update)
  .delete(UserAuthentication, teacherController.dеlete);

export default router;

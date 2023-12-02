import { Router } from "express";
import classroomController from "../controllers/ClassroomController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/sala")
  .get(UserAuthentication, classroomController.getAll)
  .post(UserAuthentication, classroomController.create);

router
  .route("/api/sala/:classroomId")
  .get(UserAuthentication, classroomController.getOne)
  .put(UserAuthentication, classroomController.update)
  .delete(UserAuthentication, classroomController.dеlete);

export default router;

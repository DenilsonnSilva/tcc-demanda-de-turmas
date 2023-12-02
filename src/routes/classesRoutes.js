import { Router } from "express";
import classController from "../controllers/ClassController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/turma")
  .get(UserAuthentication, classController.getAll)
  .post(UserAuthentication, classController.create);

router
  .route("/api/turma/:classId")
  .get(UserAuthentication, classController.getOne)
  .put(UserAuthentication, classController.update)
  .delete(UserAuthentication, classController.dеlete);

export default router;

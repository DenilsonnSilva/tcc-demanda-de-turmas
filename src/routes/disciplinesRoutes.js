import { Router } from "express";
import disciplineController from "../controllers/DisciplineController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/disciplina")
  .get(UserAuthentication, disciplineController.getAll)
  .post(UserAuthentication, disciplineController.create);

router
  .route("/api/disciplina/:disciplineId")
  .get(UserAuthentication, disciplineController.getOne)
  .put(UserAuthentication, disciplineController.update)
  .delete(UserAuthentication, disciplineController.dеlete);

export default router;

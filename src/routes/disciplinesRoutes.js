import { Router } from "express";
import disciplineController from "../controllers/DisciplineController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/disciplinas", UserAuthentication, disciplineController.read);
router.post("/disciplina", UserAuthentication, disciplineController.create);
router.put("/disciplina", UserAuthentication, disciplineController.update);
router.delete("/disciplina", UserAuthentication, disciplineController.dеlete);

export default router;

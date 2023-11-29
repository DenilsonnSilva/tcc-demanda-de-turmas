import { Router } from "express";
import {
  createDiscipline,
  readDiscipline,
  updateDiscipline,
  deleteDiscipline,
} from "../controllers/DisciplineController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/disciplinas", UserAuthentication, readDiscipline);
router.post("/disciplina", UserAuthentication, createDiscipline);
router.put("/disciplina", UserAuthentication, updateDiscipline);
router.delete("/disciplina", UserAuthentication, deleteDiscipline);

export default router;

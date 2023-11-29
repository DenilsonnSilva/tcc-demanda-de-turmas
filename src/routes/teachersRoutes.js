import { Router } from "express";
import {
  createTeacher,
  readTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/TeacherController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/professores", UserAuthentication, readTeacher);
router.post("/professor", UserAuthentication, createTeacher);
router.put("/professor", UserAuthentication, updateTeacher);
router.delete("/professor", UserAuthentication, deleteTeacher);

export default router;

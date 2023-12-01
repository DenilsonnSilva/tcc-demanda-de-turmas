import { Router } from "express";
import classroomController from "../controllers/ClassroomController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router.get("/turmas", UserAuthentication, classroomController.read);
router.post("/turma", UserAuthentication, classroomController.create);
router.put("/turma", UserAuthentication, classroomController.update);
router.delete("/turma", UserAuthentication, classroomController.dеlete);

export default router;

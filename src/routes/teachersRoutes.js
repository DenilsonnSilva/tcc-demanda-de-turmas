import { Router } from "express";
import teacherController from "../controllers/TeacherController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/professores", UserAuthentication, teacherController.read);
router.post("/professor", UserAuthentication, teacherController.create);
router.put("/professor", UserAuthentication, teacherController.update);
router.delete("/professor", UserAuthentication, teacherController.dеlete);

export default router;

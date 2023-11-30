import { Router } from "express";
import classroomController from "../controllers/ClassroomController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/salas", UserAuthentication, classroomController.read);
router.post("/sala", UserAuthentication, classroomController.create);
router.put("/sala", UserAuthentication, classroomController.update);
router.delete("/sala", UserAuthentication, classroomController.dеlete);

export default router;

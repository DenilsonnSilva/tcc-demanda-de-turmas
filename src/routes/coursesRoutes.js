import { Router } from "express";
import courseController from "../controllers/CourseController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router.get("/cursos", UserAuthentication, courseController.read);
router.post("/curso", UserAuthentication, courseController.create);
router.put("/curso", UserAuthentication, courseController.update);
router.delete("/curso", UserAuthentication, courseController.dеlete);

export default router;

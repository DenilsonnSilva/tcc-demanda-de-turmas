import { Router } from "express";
import {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/CourseController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/cursos", UserAuthentication, readCourse);
router.post("/curso", UserAuthentication, createCourse);
router.put("/curso", UserAuthentication, updateCourse);
router.delete("/curso", UserAuthentication, deleteCourse);

export default router;

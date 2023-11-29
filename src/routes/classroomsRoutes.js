import { Router } from "express";
import {
  createClassroom,
  readClassroom,
  updateClassroom,
  deleteClassroom,
} from "../controllers/ClassroomController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/salas", UserAuthentication, readClassroom);
router.post("/sala", UserAuthentication, createClassroom);
router.put("/sala", UserAuthentication, updateClassroom);
router.delete("/sala", UserAuthentication, deleteClassroom);

export default router;

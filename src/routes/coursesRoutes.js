import { Router } from "express";
import courseController from "../controllers/CourseController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/curso")
  .get(UserAuthentication, courseController.getAll)
  .post(UserAuthentication, courseController.create);

router
  .route("/api/curso/:courseId")
  .get(UserAuthentication, courseController.getOne)
  .put(UserAuthentication, courseController.update)
  .delete(UserAuthentication, courseController.dеlete);

export default router;

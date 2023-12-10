import { Router } from "express";
import classroomController from "../controllers/ClassroomController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/sala")
  .get(UserAuthentication, (req, res, next) => {
    if (Object.keys(req.query).length === 0) {
      classroomController.getAll(req, res, next);
    } else {
      classroomController.getAvailable(req, res, next);
    }
  })
  .post(UserAuthentication, classroomController.create);

router
  .route("/api/sala/:classroomId")
  .get(UserAuthentication, classroomController.getOne)
  .put(UserAuthentication, classroomController.update)
  .delete(UserAuthentication, classroomController.dеlete);

export default router;

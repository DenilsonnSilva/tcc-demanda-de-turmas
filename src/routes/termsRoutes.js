import { Router } from "express";
import termController from "../controllers/TermController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router
  .route("/api/periodo")
  .get(UserAuthentication, termController.getAll)
  .post(UserAuthentication, termController.create);

router
  .route("/api/periodo/:termId")
  .get(UserAuthentication, termController.getOne)
  .put(UserAuthentication, termController.update)
  .delete(UserAuthentication, termController.dеlete);

export default router;

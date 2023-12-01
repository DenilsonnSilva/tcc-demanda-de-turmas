import { Router } from "express";
import classController from "../controllers/ClassController.js";
import UserAuthentication from "../middlewares/UserAuthentication.js";

const router = Router();

router.get("/salas", UserAuthentication, classController.read);
router.post("/sala", UserAuthentication, classController.create);
router.put("/sala", UserAuthentication, classController.update);
router.delete("/sala", UserAuthentication, classController.dеlete);

export default router;

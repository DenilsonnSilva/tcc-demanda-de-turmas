import { Router } from "express";
import termController from "../controllers/TermController";
import UserAuthentication from "../middlewares/UserAuthentication";

const router = Router();

router.get("/periodos", UserAuthentication, termController.read);
router.post("/periodo", UserAuthentication, termController.create);
router.put("/periodo", UserAuthentication, termController.update);
router.delete("/periodo", UserAuthentication, termController.dеlete);

export default router;

import { Router } from "express";
import { logIn, signUp } from "../controllers/UserController";

const router = Router();

router.post("/cadastro", signUp);
router.post("/login", logIn);

export default router;

import { Router } from "express";
import { logIn, signUp } from "../controllers/UserController.js";

const router = Router();

router.post("/api/cadastro", signUp);
router.post("/api/login", logIn);

export default router;

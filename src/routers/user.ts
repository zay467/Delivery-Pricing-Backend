import express, { Router } from "express";
import controller from "../controllers/user";
import morgan from "morgan";

const router: Router = express.Router();

router.post("/register", morgan("tiny"), controller.register);
router.post("/login", morgan("tiny"), controller.login);

export default router;

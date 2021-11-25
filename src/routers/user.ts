import express, { Router } from "express";
import controller from "../controllers/user";

const router: Router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);

export default router;

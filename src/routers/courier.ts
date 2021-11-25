import express, { Router } from "express";
import controller from "../controllers/courier";
import extractJWT from "../middlewares/extractJWT";

const router: Router = express.Router();

router.get("/", controller.read);
router.post("/", extractJWT, controller.create);
router.put("/:id", extractJWT, controller.update);
router.delete("/:id", extractJWT, controller.deleteItem);

export default router;

import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.post("/", (req, res) => userController.create(req, res));
router.get("/", (req, res) => userController.getAll(req, res));

export default router;

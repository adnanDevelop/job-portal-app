import { Router } from "express";
import { login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.route("/api/register").post(register);
router.route("/api/login").post(login);
router.route("/api/profile/update").post(isAuthenticated, logout);

export default router;

import { Router } from "express";
import {
  login,
  register,
  updateProfile,
} from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.route("/user/register").post(register);
router.route("/user/login").post(login);
router.route("/user/profile/update").post(isAuthenticated, updateProfile);

export default router;

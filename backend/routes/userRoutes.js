import { Router } from "express";
import {
  deleteUserAccount,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/userController.js";

// Middlewares
import { singleUpload } from "../middleware/multer.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

// Routes
router.route("/user/register").post(singleUpload, register);
router.route("/user/login").post(login);
router.route("/user/logout").get(logout);
router.route("/user/delete").delete(isAuthenticated, deleteUserAccount);
router.route("/user/profile/update").post(isAuthenticated, updateProfile);

export default router;

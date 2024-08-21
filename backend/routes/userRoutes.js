import { Router } from "express";
import {
  deleteUserAccount,
  getAllUsers,
  getUserById,
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
router
  .route("/user/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);
router.route("/user/delete/:id").delete(isAuthenticated, deleteUserAccount);
router.route("/user/all").get(isAuthenticated, getAllUsers);
router.route("/user/single-user/:id").get(isAuthenticated, getUserById);

export default router;

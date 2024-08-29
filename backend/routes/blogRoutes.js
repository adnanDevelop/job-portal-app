import { Router } from "express";
import {
  getBlog,
  updateBlog,
  createBlog,
  deleteBlog,
  getBlogById,
} from "../controllers/blogController.js";
import { singleUpload } from "../middleware/multer.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.route("/get-blog").get(isAuthenticated, getBlog);
router.route("/get-blog/:id").get(isAuthenticated, getBlogById);
router.route("/delete-blog/:id").delete(isAuthenticated, deleteBlog);
router.route("/create-blog").post(isAuthenticated, singleUpload, createBlog);
router.route("/update-blog/:id").put(isAuthenticated, singleUpload, updateBlog);

export default router;

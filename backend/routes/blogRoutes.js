import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogById,
  updateBlog,
} from "../controllers/blogController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = Router();

router.route("/create-blog").post(isAuthenticated, singleUpload, createBlog);
router.route("/update-blog/:id").put(isAuthenticated, singleUpload, updateBlog);
router.route("/delete/:id").delete(isAuthenticated, deleteBlog);
router.route("/get").get(isAuthenticated, getBlog);
router.route("/get/:id").get(isAuthenticated, getBlogById);

export default router;

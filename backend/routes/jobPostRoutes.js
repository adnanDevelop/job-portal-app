import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  getJob,
  postJob,
  deleteJob,
  updateJob,
  getJobById,
  getJobByAdmin,
} from "../controllers/postJobController.js";

const router = Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/update/:id").put(isAuthenticated, updateJob);
router.route("/delete/:id").delete(isAuthenticated, deleteJob);
router.route("/get").get(isAuthenticated, getJob);
router.route("/getadminjobs").get(isAuthenticated, getJobByAdmin);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;

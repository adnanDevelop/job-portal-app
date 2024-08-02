import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  getJobById,
  getJob,
  getJobByAdmin,
  postJob,
  deleteJob,
  updateJob,
} from "../controllers/postJobController.js";

const router = Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/update/:id").put(isAuthenticated, updateJob);
router.route("/delete").delete(isAuthenticated, deleteJob);
router.route("/get").get(isAuthenticated, getJob);
router.route("/getadminjobs").get(isAuthenticated, getJobByAdmin);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;

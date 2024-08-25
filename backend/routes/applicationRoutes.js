import { Router } from "express";
import {
  applyJob,
  deleteApplication,
  getAllApplications,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/applicationController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.route("/apply/:id").post(isAuthenticated, applyJob);
router.route("/update/:id").put(isAuthenticated, updateStatus);
router.route("/delete/:id").delete(isAuthenticated, deleteApplication);
router.route("/getjob").get(getAppliedJobs);
router.route("/get-all-jobs").get(getAllApplications);
router.route("/applicant/:id").get(isAuthenticated, getApplicants);

export default router;

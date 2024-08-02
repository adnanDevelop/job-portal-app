import { Router } from "express";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/applicationController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/getjob").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicant").get(isAuthenticated, getApplicants);
router.route("/:id/update").put(isAuthenticated, updateStatus);

export default router;

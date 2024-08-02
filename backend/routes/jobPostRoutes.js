import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {getJobById, 
  getJob,
  getJobByAdmin,
  postJob,
} from "../controllers/postJobController.js";

const router = Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getJob);
router.route("/delete").delete(isAuthenticated, getJob);
router.route("/getadminjobs").get(isAuthenticated, getJobByAdmin);
router.route("/get/:id").post(isAuthenticated, getJobById);


export default router;

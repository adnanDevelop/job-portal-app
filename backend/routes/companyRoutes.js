import { Router } from "express";
import {
  deleteCompany,
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/companyController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = Router();

router.route("/register").post(isAuthenticated, singleUpload, registerCompany);
router.route("/update/:id").put(isAuthenticated, updateCompany);
router.route("/delete/:id").delete(isAuthenticated, deleteCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);

export default router;

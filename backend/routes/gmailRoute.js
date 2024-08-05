import { Router } from "express";
import createGmail from "../controllers/gmailController.js";

const router = Router();

router.route("/create-gmail").post(createGmail);

export default router;

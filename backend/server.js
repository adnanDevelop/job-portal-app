import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({});
import connectDb from "./db/db.js";

import userRoute from "./routes/userRoutes.js";
import companyRoute from "./routes/companyRoutes.js";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// All routes
app.use("/api/v1", userRoute);
app.use("/company", companyRoute);
// "http://localhost:3000/api/v1/user/register"

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running at port no: ${PORT}`);
});

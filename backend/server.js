import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config({});
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./db/db.js";

// All routes
import userRoute from "./routes/userRoutes.js";
import companyRoute from "./routes/companyRoutes.js";
import jobRoute from "./routes/jobPostRoutes.js";
import ApplicationRoute from "./routes/applicationRoutes.js";

// Configure CORS
const corsOptions = {
  origin: "http://localhost:5174", // replace with your frontend's origin
  credentials: true,
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

// All routes
app.use("/api/v1", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", ApplicationRoute);

// Server running
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running at port no: ${PORT}`);
});

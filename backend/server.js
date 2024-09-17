import cors from "cors";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import connectDb from "./db/db.js";
import cookieParser from "cookie-parser";
import path from "path";

// All routes
import jobRoute from "./routes/jobtRoutes.js";
import userRoute from "./routes/userRoutes.js";
import BlogRoute from "./routes/blogRoutes.js";
import GmailRoutes from "./routes/gmailRoute.js";
import companyRoute from "./routes/companyRoutes.js";
import ApplicationRoute from "./routes/applicationRoutes.js";

// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173", // replace with your frontend's origin
  credentials: true,
};

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// All Routes
app.use("/api/v1", userRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/blog", BlogRoute);
app.use("/api/v1/gmail", GmailRoutes);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/application", ApplicationRoute);
const __dirname = path.resolve();
// console.log(`${__dirname}/frontend/dist`, "Folder path");

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Server running
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running at port no: ${PORT}`);
});

export default app;

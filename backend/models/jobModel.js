import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    employmentType: { type: String, required: true },
    requirements: [{ type: String, required: true }],
    description: { type: String, required: true },
    positions: { type: Number, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    salary: { type: Number, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

export const Job = new mongoose.model("Job", jobSchema);

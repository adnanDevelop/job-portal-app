import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    company: {
      type: mongoose.Schema.Types.objectId,
      ref: "Company",
      required: true,
    },
    employmentType: { type: String, required: true },
    description: { type: String, required: true },
    jobType: { type: String, required: true },
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    salary: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.objectId,
      ref: "User",
      required: true,
    },
    applications: {
      type: mongoose.Schema.Types.objectId,
      ref: "Application",
    },
  },
  { timestamps: true }
);

export const Job = new model("Job", jobSchema);

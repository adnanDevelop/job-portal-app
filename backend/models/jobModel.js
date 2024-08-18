import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    employmentType: {
      type: String,
      enum: ["Permanent", "Temporary"],
      required: true,
    },
    requirements: [{ type: String, required: true }],
    description: { type: String, required: true },
    positions: { type: Number, required: true },
    category: {
      type: String,
      enum: [
        "Graphic Design",
        "Web Developer",
        "App Developer",
        "UI / UX Designer",
        "Video Editor",
        "Content Creator",
        "Blockchain Developer",
      ],
      required: true,
    },
    location: {
      type: String,
      enum: [
        "Islamabad",
        "Lahore",
        "Karachi",
        "Peshawar",
        "Faisalabad",
        "Rawalpindi",
      ],
      required: true,
    },
    address: { type: String, required: true },
    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Freelancing", "Remote"],
      required: true,
    },
    experience: { type: String, required: true },
    qualification: { type: String },
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

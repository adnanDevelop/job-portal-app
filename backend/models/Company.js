import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    bio: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    city: {
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
    logo: { type: String },
    founded: { type: Number, required: true },
    founder: { type: String, required: true },
    headQuater: { type: String, required: true },
    websiteLink: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    allJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  },
  { timestamps: true }
);

export const Company = new mongoose.model("Company", userSchema);

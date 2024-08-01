import { Schema, model } from "mongoose";

const applicationSchema = new Schema(
  {
    job: {
      type: mongoose.Schema.Types.objectId,
      ref: "Job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.objectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["accepted", "rejected", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Application = new model("Application", applicationSchema);

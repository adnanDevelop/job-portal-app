import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruitor"],
      required: true,
    },
    profile: {
      studentName: { type: String },
      bio: { type: String },
      skills: [{ type: String }],
      experience: [{ type: String }],
      dateOfBirth: { type: String },
      address: { type: String },
      city: { type: String },
      country: { type: String },
      phoneNumber: { type: Number },
      resume: { type: String },
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: { type: String, default: "" },
      profileBanner: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);

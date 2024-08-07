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
      default: "student",
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String, required: true }],
      experience: { type: String, default: "" },
      dateOfBirth: { type: String, default: "" },
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
      phoneNumber: { type: Number, default: "" },
      resume: { type: String, default: "" },
      resumeOriginalName: { type: String, default: "" },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: { type: String, default: "" },
      socialLinks: {
        linkedinLink: { type: String, default: "" },
        portfolioLink: { type: String, default: "" },
      },
    },
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);

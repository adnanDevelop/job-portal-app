import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    logo: { type: String, required: true },
    companyBanner: { type: String, required: true },
    description: { type: String, required: true },
    founded: { type: Number, required: true },
    founder: { type: String, required: true },
    headQuater: { type: String, required: true },
    website: { type: String },
    userId: {
      type: mongoose.Schema.Types.objectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = new model("Company", userSchema);

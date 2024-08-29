import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    content: { type: String, required: true },
    totalViews: { type: Number, default: 0 },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = new mongoose.model("Blog", blogSchema);

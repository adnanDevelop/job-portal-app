import { Blog } from "../models/blogModal.js";
import getDataUri from "../middleware/datauri.js";
import cloudinary from "../middleware/cloudinary.js";
import { errorHandler } from "../utils/errorHandler.js";
import { responseHandler } from "../utils/responseHandler.js";

export const createBlog = async (req, res) => {
  try {
    const userId = req.id;
    const files = req.files;
    const { title, subTitle, content } = req.body;

    if (!userId) {
      return errorHandler(res, 400, "User not found");
    }

    if (!title || !subTitle || !content) {
      return errorHandler(res, 400, "All fields are required");
    }

    let imgUrl;
    if (files?.image && files?.image.length > 0) {
      const imageUri = getDataUri(files?.image[0]);
      const cloudinaryResponse = await cloudinary.uploader.upload(
        imageUri.content
      );
      imgUrl = cloudinaryResponse.secure_url;
    }

    const createBlog = await Blog.create({
      title,
      subTitle,
      content,
      image: imgUrl,
      createdBy: userId,
    });

    return responseHandler(res, 200, "Blog created successfully", createBlog);
  } catch (error) {
    console.log("Error while creating blog:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const files = req.files;
    const { title, subTitle, content } = req.body;
    let imgUrl;

    // Find the blog to be updated
    const findBlog = await Blog.findOne({ _id: id });

    if (!findBlog) {
      return errorHandler(res, 400, "Blog not found");
    }

    // Check if new image is provided
    if (files?.image && files?.image.length > 0) {
      const imageUri = getDataUri(files.image[0]);
      const cloudinaryResponse = await cloudinary.uploader.upload(
        imageUri.content
      );
      imgUrl = cloudinaryResponse.secure_url;
    } else {
      // Keep the existing image URL if no new image is provided
      imgUrl = findBlog.image;
    }

    // Validate required fields
    if (!title || !subTitle || !content) {
      return errorHandler(res, 400, "All fields are required");
    }

    // Prepare data for update
    const updateData = {
      title,
      subTitle,
      content,
      image: imgUrl,
    };

    // Update blog
    const updateBlog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return responseHandler(res, 200, "Blog updated successfully", updateBlog);
  } catch (error) {
    console.log("Error while updating blog:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const findBlog = await Blog.findOne({ _id: id });
    if (!findBlog) {
      return errorHandler(res, 400, "Blog not found");
    }

    const deleteBlog = await Blog.deleteOne({ _id: id });
    if (deleteBlog.deletedCount !== 1) {
      return errorHandler(res, 400, "Blog not deleted");
    } else {
      return responseHandler(res, 200, "Blog deleted successfully");
    }
  } catch (error) {
    console.log("Error while deleting blog:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

export const getBlog = async (req, res) => {
  try {
    const { search, category, page = 1, limit = 12 } = req.query;

    // Convert page and limit to numbers
    const currentPage = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    // Build queru
    const query = {
      $and: [
        {
          $or: [
            { title: { $regex: search || "", $options: "i" } },
            { content: { $regex: search || "", $options: "i" } },
          ],
        },
        category ? { category: { $regex: category, $options: "i" } } : {},
      ],
    };

    // Get total count of blogs matching the query
    const totalBlogs = await Blog.countDocuments(query);

    const getAllBlogs = await Blog.find(query).populate({
      path: "createdBy",
    });

    // Send response
    return res.status(200).json({
      status: 200,
      message: "Data retrieved successfully",
      data: getAllBlogs,
      pageDetails: {
        totalResults: totalBlogs,
        currentPage,
        totalPages: Math.ceil(totalBlogs / pageSize),
      },
    });
  } catch (error) {
    console.log("Error while getting blog:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const findBlog = await Blog.findById(id).populate({
      path: "createdBy",
    });

    if (!findBlog) {
      return errorHandler(res, 400, "Blog not found");
    } else {
      return responseHandler(res, 200, "Data retrieved successfully", findBlog);
    }
  } catch (error) {
    console.log("Error while getting blog by Id:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

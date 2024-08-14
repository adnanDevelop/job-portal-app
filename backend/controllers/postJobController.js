import { Job } from "../models/jobModel.js";

// Handlers
import { errorHandler } from "../utils/errorHandler.js";
import { responseHandler } from "../utils/responseHandler.js";

// Post job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      employmentType,
      requirements,
      description,
      positions,
      category,
      location,
      address,
      jobType,
      experience,
      qualification,
      salary,
      company,
      application,
    } = req.body;

    const userId = req.id;

    let requirementsArray;
    if (requirements) {
      requirementsArray = requirements.split(",");
    }

    // Create job
    const createJob = await Job.create({
      title,
      employmentType,
      requirements: requirementsArray,
      description,
      positions,
      category,
      location,
      address,
      jobType,
      experience,
      qualification,
      salary,
      company,
      application,
      createdBy: userId,
    });

    // sending response
    return responseHandler(res, 200, "Job created successfully", createJob);
  } catch (error) {
    console.log("Error while posting job:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Update job
export const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const {
      title,
      employmentType,
      requirements,
      description,
      location,
      jobType,
      experience,
      qualification,
      salary,
      application,
    } = req.body;

    // update data
    const updateJobData = {
      title,
      employmentType,
      requirements,
      description,
      location,
      jobType,
      experience,
      qualification,
      salary,
      application,
    };

    const findJob = await Job.find({ _id: jobId });
    if (!findJob) {
      return errorHandler(res, 400, "Job not found.");
    }

    // Update Job
    const job = await Job.findByIdAndUpdate({ _id: jobId }, updateJobData, {
      new: true,
    });

    // Sending response
    return responseHandler(res, 200, "job updated successfully", job);
  } catch (error) {
    console.log("Error while updating job:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Delete job
export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const findJob = await Job.find({ _id: jobId });
    if (!findJob) {
      return errorHandler(res, 400, "Job not found.");
    }

    // Delete Company
    const job = await Job.deleteOne({ _id: jobId });
    if (job.deletedCount !== 1) {
      return errorHandler(res, 400, "Job not deleted.");
    } else {
      return errorHandler(res, 400, "Job deleted successfully.");
    }
  } catch (error) {
    console.log("Error while deleting job:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Get job using queries
export const getJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const getAllJobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    // If jobs not found
    if (!getAllJobs) {
      return errorHandler(res, 400, "Job not found.");
    }

    // Sending response
    return responseHandler(res, 200, "Data retreived successfully", getAllJobs);
  } catch (error) {
    console.log("Error while posting job:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// get job by id
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const findJob = await Job.findById(jobId).populate({ path: "company" });
    if (!findJob) {
      return errorHandler(res, 400, "Job not found.");
    }

    // Sending response
    return responseHandler(res, 200, "Data retreived successfully", findJob);
  } catch (error) {
    console.log("Error while getting jobs by id:", error.message);
    return errorHandler(res, 400, error.message);
  }
};

//get job by admin
export const getJobByAdmin = async (req, res) => {
  try {
    const adminId = req.id;

    const getJob = await Job.find({ createdBy: adminId });
    // If job not found
    if (!getJob) {
      return errorHandler(res, 400, "Job not found.");
    }

    // Sending response
    return responseHandler(res, 200, "Data retreived successfully", getJob);
  } catch (error) {
    console.log(
      "Error while admins getting jobs with admin id:",
      error.message
    );
    return errorHandler(res, 400, error.message);
  }
};

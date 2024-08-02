import { Job } from "../models/jobModel.js";

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
    return res.status(200).json({
      message: "New job created successfully",
      status: 200,
      data: createJob,
    });
  } catch (error) {
    console.log("Error while posting job:", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
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
      return res.status(400).json({
        message: "Job not found.",
        status: 400,
      });
    }

    // Update Job
    const job = await Job.findByIdAndUpdate({ _id: jobId }, updateJobData, {
      new: true,
    });

    // If job not found
    if (!job) {
      return res.status(400).json({
        message: "job not found.",
        status: 400,
      });
    }

    // Sending response
    return res.status(200).json({
      message: "job updated successfully",
      status: 200,
      data: job,
    });
  } catch (error) {
    console.log("Error while updating job:", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Delete job
export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const findJob = await Job.find({ _id: jobId });
    if (!findJob) {
      return res.status(400).json({
        message: "Job not found",
        status: 400,
      });
    }

    // Delete Company
    const job = await Job.deleteOne({ _id: jobId });
    if (job.deletedCount !== 1) {
      return res.status(400).json({
        message: "Job not deleted",
        status: 400,
      });
    } else {
      return res.status(200).json({
        message: "Job deleted successfully",
        status: 200,
      });
    }
  } catch (error) {
    console.log("Error while deleting job:", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
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
      return res.status(400).json({
        message: "Jobs not found",
        status: 400,
      });
    }

    // Sending response
    return res.status(200).json({
      message: "Data retreived successfully",
      status: 200,
      data: getAllJobs,
    });
  } catch (error) {
    console.log("Error while posting job:", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// get job by id
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const findJob = await Job.findById(jobId).populate({ path: "company" });
    if (!findJob) {
      return res.status(400).json({
        message: "Job not found",
        status: 400,
      });
    }

    // Sending response
    return res.status(200).json({
      message: "New job created successfully",
      status: 200,
      data: findJob,
    });
  } catch (error) {
    console.log("Error while getting jobs by id:", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

//get job by admin
export const getJobByAdmin = async (req, res) => {
  try {
    const adminId = req.id;

    const getJob = await Job.find({ createdBy: adminId });
    // If job not found
    if (!getJob) {
      return res.status(400).json({
        message: "Job not found",
        status: 400,
      });
    }

    // Sending response
    return res.status(200).json({
      message: "New job created successfully",
      status: 200,
      data: getJob,
    });
  } catch (error) {
    console.log(
      "Error while admins getting jobs with admin id:",
      error.message
    );
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

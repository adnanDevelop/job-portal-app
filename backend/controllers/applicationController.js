// Models
import { Job } from "../models/jobModel.js";
import { Application } from "../models/applicationModel.js";

// Handlers
import { errorHandler } from "../utils/errorHandler.js";
import { responseHandler } from "../utils/responseHandler.js";

// apply on the job
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return errorHandler(res, 400, "Job id is required");
    }

    // If job exist or not
    const findJob = await Job.findById({ _id: jobId });
    if (!findJob) {
      return errorHandler(res, 400, "Job not found");
    }

    // If user already apply on this job
    const isUserApply = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (isUserApply) {
      return errorHandler(res, 400, "You have already apply for this job");
    }

    // Create application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    findJob.applications.push(newApplication._id);
    await findJob.save();

    return res.status(200).json({
      message: "Job applied successfully",
      status: 200,
      data: newApplication,
    });
  } catch (error) {
    console.log("error while applying for job", error.message);
    return errorHandler(res, 400, "All fields are required");
  }
};

// Get applied jobs
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const getApplications = await Application.find({ applicant: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });

    if (!getApplications) {
      return errorHandler(res, 400, "No Applications");
    }

    return responseHandler(
      res,
      200,
      "Data retreived successfully",
      getApplications
    );
  } catch (error) {
    console.log("error while getting applications ", error.message);
    return errorHandler(res, 400, error.message);
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const getData = await Application.find({})
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      })
      .populate({ path: "applicant" });

    return responseHandler(res, 200, "Data retreived successfully", getData);
  } catch (error) {
    console.log("error while getting all applications", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Get applicants
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const findJob = await Job.findById({ _id: jobId }).populate({
      path: "applications",
      options: {
        sort: { createdAt: -1 },
        populate: {
          path: "applicant",
        },
      },
    });

    if (!findJob) {
      return errorHandler(res, 400, "Job not found");
    }

    return responseHandler(res, 200, "Data retreived successfully", findJob);
  } catch (error) {
    console.log("error while getting application by id ", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// update status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    // if application not found
    if (!status) {
      return errorHandler(res, 400, "Status is required");
    }

    // find application
    const application = await Application.findOne({ _id: applicationId });

    // if application not found
    if (!application) {
      return errorHandler(res, 400, "Application not found");
    }

    // update status
    application.status = status.toLowerCase();
    await application.save();

    return responseHandler(res, 200, "Application updated successfully");
  } catch (error) {
    console.log("error while updating application status ", error.message);
    return errorHandler(res, 400, error.message);
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const applicationId = req.params.id;

    const findApplication = await Application.findOne({ _id: applicationId });
    if (!findApplication) {
      return errorHandler(res, 400, "Application not found");
    }

    // Delete Application
    const application = await Application.deleteOne({ _id: applicationId });
    if (application.deletedCount !== 1) {
      return errorHandler(res, 400, "Application not deleted");
    } else {
      return responseHandler(res, 200, "Application deleted successfully");
    }
  } catch (error) {
    console.log("error while deleting application ", error.message);
    return errorHandler(res, 400, error.message);
  }
};

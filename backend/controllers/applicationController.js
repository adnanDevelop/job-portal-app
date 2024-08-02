import { Application } from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";

// apply on the job
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required.",
        status: 400,
      });
    }

    // If user already apply on this job
    const isUserApply = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (isUserApply) {
      return res.status(400).json({
        message: "You have already apply for this job.",
        status: 400,
      });
    }

    // If job exist or not
    const findJob = await Job.findById({ _id: jobId });
    if (!findJob) {
      return res.status(400).json({
        message: "Job not found.",
        status: 400,
      });
    }
    s

    // Create application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    console.log(newApplication);

    Job.applications.push(newApplication._id);
    await Job.save();

    return res.status(200).json({
      message: "Job applied successfully",
      status: 200,
      data: newApplication,
    });
  } catch (error) {
    console.log("error while applying for job", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
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
      return res.status(400).json({
        message: "No Applications",
        status: 400,
      });
    }

    res.status(200).json({
      message: "Data retreived successfully",
      data: getApplications,
      status: 200,
    });
  } catch (error) {
    console.log("error while getting applications ", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
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
      res.status(400).json({
        message: "Job not found",
        status: 400,
      });
    }

    return res.status(200).json({
      message: "Data retreived successfully",
      status: 200,
      data: findJob,
    });
  } catch (error) {
    console.log("error while getting application by id ", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// update status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    // if application not found
    if (!status) {
      return res.status(400).json({
        message: "Status is required",
        status: 400,
      });
    }

    // find application
    const application = await Application.findOne(
      { _id: applicationId },
      { $set: { status } }
    );
    // if application not found
    if (!application) {
      return res.status(400).json({
        message: "Application not found",
        status: 400,
      });
    }

    // update status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Application updated successfully",
      status: 200,
    });
  } catch (error) {
    console.log("error while updating application status ", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

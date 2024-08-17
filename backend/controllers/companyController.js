import { Company } from "../models/Company.js";
import getDataUri from "../middleware/datauri.js";
import cloudinary from "../middleware/cloudinary.js";
import { errorHandler } from "../utils/errorHandler.js";
import { responseHandler } from "../utils/responseHandler.js";

// Create Company
export const registerCompany = async (req, res) => {
  try {
    const id = req.id;
    const files = req.files;
    let companyLogoUrl;
    const {
      companyName,
      bio,
      description,
      location,
      founded,
      founder,
      headQuater,
      websiteLink,
    } = req.body;

    console.log(req.files.logo);

    if (files.logo && files.logo.length > 0) {
      const logoUri = getDataUri(files.logo[0]);
      const cloudinaryResponse = await cloudinary.uploader.upload(
        logoUri.content
      );
      console.log(cloudinaryResponse, "cloudinary response");
      companyLogoUrl = cloudinaryResponse.secure_url;
    }

    // If company exist
    let isCompanyExist = await Company.findOne({ companyName });
    if (isCompanyExist) {
      return errorHandler(res, 400, "You can't register the same company");
    }

    // Saving company
    isCompanyExist = await Company.create({
      companyName,
      bio,
      description,
      location,
      founded,
      founder,
      headQuater,
      websiteLink,
      userId: id,
      logo: companyLogoUrl,
    });

    return responseHandler(
      res,
      200,
      "Company registered successfully",
      isCompanyExist
    );
  } catch (error) {
    console.log("error while registering company", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Update companies
export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const {
      companyName,
      bio,
      description,
      location,
      founded,
      founder,
      headQuater,
      websiteLink,
    } = req.body;

    const updateData = {
      companyName,
      bio,
      description,
      location,
      founded,
      founder,
      headQuater,
      websiteLink,
    };

    // Update Company
    const company = await Company.findByIdAndUpdate(
      { _id: companyId },
      updateData,
      { new: true }
    );

    if (!company) {
      return errorHandler(res, 400, "Company not found");
    }

    return responseHandler(res, 200, "Company updated successfully", company);
  } catch (error) {
    console.log("error while updating company", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    // If company not exist
    const isCompanyExist = await Company.find({ _id: companyId });
    if (!isCompanyExist) {
      return errorHandler(res, 400, "Company not found");
    }

    // Delete Company
    const company = await Company.deleteOne({ _id: companyId });
    if (company.deletedCount !== 1) {
      return errorHandler(res, 400, "Company not deleted");
    } else {
      return responseHandler(res, 200, "Company deleted successfully");
    }
  } catch (error) {
    console.log("error while deleting company", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Get all companies
export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const { search, page = 1, limit = 12 } = req.query;
    let query = {};

    const companies = await Company.find({ userId });
    if (!companies) {
      return errorHandler(res, 400, "Companies not found");
    }

    if (search) {
      query = {
        $or: [{ companyName: { $regex: search, $options: "i" } }],
      };
    }

    const skip = (page - 1) * limit;
    const allCompanies = await Company.find(query)
      .skip(skip)
      .limit(parseInt(limit));

    const totalCompanies = await Company.countDocuments(query);

    return res.status(200).json({
      status: 200,
      message: "Data retrieved successfully",
      data: allCompanies,
      pagination: {
        currentPage: page,
        limit: limit,
        totalDocuments: totalCompanies,
      },
    });
  } catch (error) {
    console.log("error while getting companies", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Get companies by id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const getCompany = await Company.findOne({ _id: companyId });
    if (!getCompany) {
      return errorHandler(res, 400, "Company not found");
    }

    return responseHandler(res, 200, "Data retreived successfully", getCompany);
  } catch (error) {
    console.log("error while getting  company by id", error.message);
    return errorHandler(res, 400, error.message);
  }
};

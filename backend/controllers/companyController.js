import { Company } from "../models/Company.js";

// Create Company
export const registerCompany = async (req, res) => {
  try {
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

    const id = req.id;

    // If company exist
    let isCompanyExist = await Company.findOne({ companyName });
    if (isCompanyExist) {
      return res.status(400).json({
        message: "You can't register the same company.",
        status: 400,
      });
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
    });

    return res.status(200).json({
      message: "Company registered successfully",
      data: isCompanyExist,
      status: 200,
    });
  } catch (error) {
    console.log("error while creating company", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
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
      return res.status(400).json({
        message: "Company not found.",
        status: 400,
      });
    }

    return res.status(200).json({
      message: "Company updated successfully",
      data: company,
      status: 200,
    });
  } catch (error) {
    console.log("error while updating company", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    // If company not exist
    const isCompanyExist = await Company.find({ _id: companyId });
    if (!isCompanyExist) {
      return res.status(400).json({
        message: "Company not found",
        status: 400,
      });
    }

    // Delete Company
    const company = await Company.deleteOne({ _id: companyId });
    if (company.deletedCount !== 1) {
      return res.status(400).json({
        message: "Company not deleted",
        status: 400,
      });
    } else {
      return res.status(200).json({
        message: "Company deleted successfully",
        status: 200,
      });
    }
  } catch (error) {
    console.log("error while deleting company", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Get all companies
export const getCompany = async (req, res) => {
  try {
    const userId = req.id;

    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(400).json({
        message: "Companies not found.",
        status: 400,
      });
    }

    return res.status(200).json({
      message: "Data retreived successfully",
      data: companies,
      status: 200,
    });
  } catch (error) {
    console.log("error while getting companies", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Get companies by id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const getCompany = await Company.findOne({ _id: companyId });
    if (!getCompany) {
      return res.status(400).json({
        message: "Company not found.",
        status: 400,
      });
    }

    return res.status(200).json({
      message: "Data retreived successfully",
      data: getCompany,
      status: 200,
    });
  } catch (error) {
    console.log("error while getting  company by id", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

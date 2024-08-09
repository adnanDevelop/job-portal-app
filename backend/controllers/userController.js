import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import getDataUri from "../middleware/datauri.js";
import cloudinary from "../middleware/cloudinary.js";
import { errorHandler } from "../utils/errorHandler.js";

// Register controller
export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        message: "User already exist with this email",
        status: 400,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });

    console.log(createUser);

    return res.status(200).json({
      message: "Account created successfully",
      status: 200,
      data: createUser,
    });
  } catch (error) {
    console.log("error while registering user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Login controller
export const login = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return errorHandler(res, 400, "All fields are required");
    }

    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return errorHandler(res, 400, "Invalid email address");
    }

    // if password doesn't exist
    const comparePassword = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!comparePassword) {
      return errorHandler(res, 400, "Invalid password");
    }

    // if role doesn't exist
    if (role !== isUserExist.role) {
      return errorHandler(res, 400, "User doesn't exist with current role");
    }

    // generate token
    const generateToken = await jwt.sign(
      {
        userId: isUserExist._id.toString(),
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // login user
    return res
      .status(200)
      .cookie("token", generateToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${isUserExist.fullName}`,
        data: isUserExist,
        status_code: 200,
      });
  } catch (error) {
    console.log("error while login user", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Logout controller
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logout successfully", status: 200 });
  } catch (error) {
    console.log("error while logout user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Update profile controller
export const updateProfile = async (req, res) => {
  try {
    const {
      fullName,
      email,
      bio,
      description,
      skills,
      experience,
      dateOfBirth,
      address,
      city,
      country,
      phoneNumber,
      linkedinLink,
      portfolioLink,
    } = req.body;

    // Cloudinary configuration
    const files = req.files;
    let profilePhotoUrl, resumeUrl, cloudinaryResponse;

    // Upload profilePhoto to Cloudinary if it exists
    if (files.profilePhoto && files.profilePhoto.length > 0) {
      const profilePhotoUri = getDataUri(files.profilePhoto[0]);

      cloudinaryResponse = await cloudinary.uploader.upload(
        profilePhotoUri.content
      );
      profilePhotoUrl = cloudinaryResponse.secure_url;
    }

    // Upload resume to Cloudinary if it exists
    if (files.resume && files.resume.length > 0) {
      const resumeUri = getDataUri(files.resume[0]);
      cloudinaryResponse = await cloudinary.uploader.upload(resumeUri.content, {
        resource_type: "raw",
      });
      resumeUrl = cloudinaryResponse.secure_url;
    }

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }

    // Finding user by id
    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        status: 400,
      });
    }

    // Ensure the profile object exists
    if (!user.profile) {
      user.profile = {};
    }

    if (email) user.email = email;
    if (bio) user.profile.bio = bio;
    if (city) user.profile.city = city;
    if (fullName) user.fullName = fullName;
    if (address) user.profile.address = address;
    if (country) user.profile.country = country;
    if (skills) user.profile.skills = skillsArray;
    if (experience) user.profile.experience = experience;
    if (dateOfBirth) user.profile.dateOfBirth = dateOfBirth;
    if (description) user.profile.description = description;
    if (phoneNumber) user.profile.phoneNumber = phoneNumber;
    if (cloudinaryResponse) {
      user.profile.resume = resumeUrl;
      // user.profile.resumeOriginalName = resume
    }
    if (cloudinaryResponse) user.profile.profilePhoto = profilePhotoUrl;

    // Ensure the socialLinks object exists
    if (!user.profile.socialLinks) {
      user.profile.socialLinks = {};
    }

    if (linkedinLink) user.profile.socialLinks.linkedinLink = linkedinLink;
    if (portfolioLink) user.profile.socialLinks.portfolioLink = portfolioLink;

    // Update user profile data
    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profile: user.profile,
    };

    res.status(200).json({
      message: "Profile updated successfully",
      status: 200,
      data: user,
    });
  } catch (error) {
    console.log("error while updating profile", error);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Delete User account
export const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        status: 400,
      });
    }

    // Delete user
    const deleteUser = await User.deleteOne({ _id: userId });
    if (deleteUser.deletedCount !== 1) {
      return res.status(400).json({
        message: "User not deleted",
        status: 400,
      });
    } else {
      return res.status(200).json({
        message: "User deleted successfully",
        status: 200,
      });
    }
  } catch (error) {
    console.log("error while deleting user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

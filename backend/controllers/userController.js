import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

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
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }

    let isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({
        message: "Invalid email address",
        status: 400,
      });
    }

    const comparePassword = await bcrypt.compare(
      password,
      isUserExist.password
    );

    // if password doesn't exist
    if (!comparePassword) {
      return res.status(400).json({
        message: "Invalid password",
        status: 400,
      });
    }

    // if role doesn't exist
    if (role !== isUserExist.role) {
      return res.status(400).json({
        message: "User doesn't exist with current role",
        status: 400,
      });
    }

    // generate token
    const generateToken = await jwt.sign(
      {
        userId: isUserExist._id.toString(),
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    isUserExist = {
      _id: isUserExist._id,
      fullName: isUserExist.fullName,
      email: isUserExist.email,
      phoneNumber: isUserExist.phoneNumber,
      role: isUserExist.role,
      profile: isUserExist.profile,
    };

    // login user
    return res
      .status(200)
      .cookie("token", generateToken, {
        maxAge: "1*24*60*60*1000",
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${fullName}`,
        user: isUserExist,
        status_code: 200,
      });
  } catch (error) {
    console.log("error while login user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
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
    const file = req.file;
    const {
      studentName,
      bio,
      skills,
      experience,
      dateOfBirth,
      address,
      city,
      country,
      phoneNumber,
    } = req.body;

    // If all fields are empty
    if (
      !studentName ||
      !bio ||
      !skills ||
      !experience ||
      !dateOfBirth ||
      !address ||
      !city ||
      !country ||
      !phoneNumber
    ) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }

    const skillsArray = skills.split(",");
    const userId = req.id;

    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        status: 400,
      });
    }

    //   udpate user profile data
    await user.save();

    user = {
      studentName: user.studentName,
      bio: user.bio,
      skillsArray: user.skills,
      experience: user.experience,
      dateOfBirth: user.dateOfBirth,
      address: user.address,
      city: user.city,
      country: user.country,
      phoneNumber: user.phoneNumber,
    };

    res.status(200).json({
      message: "Profile updated successfully",
      status: 200,
    });
  } catch (error) {
    console.log("error while updating profile", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

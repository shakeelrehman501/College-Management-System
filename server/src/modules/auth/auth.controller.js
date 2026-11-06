import sendEmail from "#app/services/email.service.js";
import resend from "#app/services/email.provider.js";
import userModel from "#app/modules/users/user.model.js";
import User from "#app/modules/users/user.model.js";
import ApiError from "#app/utils/ApiError.js";
import ApiResponse from "#app/utils/ApiResponse.js";
import asyncHandler from "#app/utils/asyncHandler.js";
import setAuthCookie  from "#app/utils/auth-cookie.js"
import { sentEmailByResender } from "#app/services/email.provider.js"
import {
  generateAccessToken,
  generateRefreshToken,
} from "#app/utils/generateToken.js";
import bcrypt from "bcrypt";
import "dotenv/config";

// User Registeration Controller
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    throw new ApiError(400, "Missing details");
  }
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already existed");
  }
  const hashPassword = await bcrypt.hash(password, 12);
  sentEmailByResender(email);
  const user = await userModel.create({
    name,
    email,
    password: hashPassword,
    role,
  });

  const token = generateAccessToken(user._id);

  setAuthCookie(res, token);

  return res.status(200).json(new ApiResponse(200, "created", user));
});

// Login Controller
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password) {
    throw new ApiError(451, "Email & password are required");
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found, please enter valid email");
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new ApiError(401, "Please enter valid password");
  }
  const token = generateAccessToken(user._id);
  setAuthCookie(res, token);
  user.isLoggedIn = true;
  await user.save();
  return res
    .status(200)
    .json(new ApiResponse(200, "User login successfully", {user, token}));
});

const logoutUser = asyncHandler(async (req, res) => {
  console.log("Logout controller");
  return res
    .status(200)
    .json(new ApiResponse(200, "User logged out successfully"));
});

export { registerUser, loginUser, logoutUser };

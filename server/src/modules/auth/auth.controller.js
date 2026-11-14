import userModel from "#app/modules/users/user.model.js";
import ApiError from "#app/utils/ApiError.js";
import ApiResponse from "#app/utils/ApiResponse.js";
import asyncHandler from "#app/utils/asyncHandler.js";
import { setAuthCookie, clearAuthCookie } from "#app/utils/auth-cookie.js";
import { sentEmailByResender } from "#app/services/email.provider.js";
import { generateAccessToken } from "#app/utils/generateToken.js";
import bcrypt from "bcrypt";
import "dotenv/config";

const registerUser = asyncHandler(async (req, res) => {
  // 1. Get validated data from Zod
  const { name, email, password } = req.validatedData;

  // 2. Check existing user
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "An account with this email already exists");
  }
  // 3. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Create new user
  let user;
  try {
    user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role: "student",
    });
  } catch (error) {
    // Handle duplicate email during concurrent requests
    if (error.code === 11000) {
      throw new ApiError(409, "An account with this email already exists");
    }
    throw error;
  }
  // 5. Generate access token
  const accessToken = generateAccessToken(user._id);
  // 6. Set authentication cookie
  setAuthCookie(res, accessToken);
  // 7. Send welcome email
  // Email failure should not affect successful registration
  try {
    await sentEmailByResender(email);
  } catch (error) {
    console.error("Welcome email delivery failed:", error.message);
  }

  // 8. Prepare safe user response
  const safeUser = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  // 9. Return success response
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        "Your account has been created successfully",
        safeUser,
      ),
    );
});

const loginUser = asyncHandler(async (req, res) => {
  // 1. Get validated data from Zod
  const { email, password, role } = req.validatedData;

  // 2. Find user by normalized email

  const user = await userModel.findOne({ email }).select("+password");

  // 3. Verify user credentials
  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  // 4. Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }
  // 5. Check email verification
  if (user.isAccountVerified === false) {
    throw new ApiError(403, "Please verify your email before logging in");
  }
  //6. Admin: must be approved by superAdmin
  if (user.role === "admin" && user.adminApprovalStatus !== "approved") {
    throw new ApiError(403, "Admin account is pending superAdmin approval");
  }
  // Teacher/Student: must be approved by admin
  if (
    (user.role === "teacher" || user.role === "student") &&
    user.approvalStatus !== "approved"
  ) {
    throw new ApiError(403, "Your account is pending admin approval");
  }

  // 7. Validate selected portal
  if (role && user.role !== role) {
    throw new ApiError(403, `This account belongs to the ${user.role} portal`);
  }

  // 8. Generate access token
  const accessToken = generateAccessToken(user._id);

  // 9. Set authentication cookie
  setAuthCookie(res, accessToken);

  // 10. Prepare safe user response
  const safeUser = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isAccountVerified: user.isAccountVerified,
    createdAt: user.createdAt,
  };

  // 11. Return standardized success response
  return res
    .status(200)
    .json(new ApiResponse(200, "Login successful", safeUser));
});

const logoutUser = asyncHandler(async (req, res) => {
  // 1. Clear authentication cookie
  clearAuthCookie(res);

  // 2. Return standardized success response
  return res
    .status(200)
    .json(new ApiResponse(200, "Logged out successfully", null));
});

const sendVerifyOtp = asyncHandler(async (req, res) => {
  //1. Authenticated user
  const userId = req.user.id;

  //2. Find user
  const user = await userModel.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  //3. Check account verification
  if (user.isAccountVerified) {
    throw new ApiError(409, "Account already verified");
  }

  //4. Generate OTP
  const otp = createOTP();

  //5. Save hashed OTP and expiry
  user.verifyOtp = otp.hashedOtp;
  user.verifyOtpExpiresAt = otp.expiresAt;

  await user.save();

  //6. Send OTP through email
  await sentEmailByResender(user.email, user.name, otp.rawOtp);

  // Send response
  return res.status(200).json(
    new ApiResponse(200, "Verification OTP sent successfully", {
      expiresIn: 600,
    }),
  );
});

const verifyEmail = asyncHandler(async (req, res) => {
  // 1. Get authenticated user ID
  const userId = req.user.id;

  // 2. Get OTP from request body
  const { otp } = req.body;

  if (!otp) {
    throw new ApiError(400, "OTP is required");
  }

  // 3. Find user
  const user = await userModel
    .findById(userId)
    .select("+verifyOtp +verifyOtpExpiresAt");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // 4. Check whether email is already verified
  if (user.isAccountVerified) {
    throw new ApiError(409, "Email is already verified");
  }

  // 5. Check OTP availability
  if (!user.verifyOtp || !user.verifyOtpExpiresAt) {
    throw new ApiError(400, "OTP not found. Please request a new OTP");
  }

  // 6. Check OTP expiry
  if (new Date() > new Date(user.verifyOtpExpiresAt)) {
    throw new ApiError(400, "OTP has expired. Please request a new OTP");
  }

  // 7. Hash received OTP
  const hashedOTP = hashData(otp);

  // 8. Compare OTP
  if (user.verifyOtp !== hashedOTP) {
    throw new ApiError(400, "Invalid OTP. Please enter the correct OTP");
  }

  // 9. Verify email
  user.isAccountVerified = true;

  // 10. Remove OTP after successful verification
  user.verifyOtp = null;
  user.verifyOtpExpiresAt = null;

  await user.save();

  // Send response
  return res.status(200).json(
    new ApiResponse(200, "Email verified successfully", {
      isAccountVerified: user.isAccountVerified,
    }),
  );
});

const sendResetOtp = asyncHandler(async (req, res) => {
  // 1. Get email from request body
  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  // 2. Find user by email
  const user = await userModel.findOne({
    email: email.trim().toLowerCase(),
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // 3. Generate secure OTP
  const { rawOtp, hashedOtp, expiresAt } = createOTP();

  // 4. Save hashed OTP and expiry
  user.resetOtp = hashedOtp;
  user.resetOtpExpiresAt = expiresAt;

  await user.save();

  // 5. Send password reset OTP through email
  await sentEmailByResender(user.email, user.name, rawOtp);

  // Send response
  return res.status(200).json(
    new ApiResponse(200, "Password reset OTP sent successfully", {
      expiresIn: 600,
    }),
  );
});

const verifyResetOtp = asyncHandler(async (req, res) => {
  // Get email and OTP
  const { email, otp } = req.body;

  if (!email || !otp) {
    throw new ApiError(400, "Email and OTP are required");
  }

  // Find user
  const user = await userModel
    .findOne({
      email: email.trim().toLowerCase(),
    })
    .select("+resetOtp +resetOtpExpiresAt");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Check OTP availability
  if (!user.resetOtp || !user.resetOtpExpiresAt) {
    throw new ApiError(400, "Reset OTP not found. Please request a new OTP");
  }

  // Check OTP expiry
  if (new Date() > user.resetOtpExpiresAt) {
    throw new ApiError(400, "Reset OTP has expired. Please request a new OTP");
  }

  // Hash received OTP
  const hashedOTP = hashData(otp);

  // Compare OTP
  if (user.resetOtp !== hashedOTP) {
    throw new ApiError(400, "Invalid OTP. Please enter the correct OTP");
  }

  // Clear OTP after successful verification
  user.resetOtp = null;
  user.resetOtpExpiresAt = null;

  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Password reset OTP verified successfully"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  sendVerifyOtp,
  verifyEmail,
  sendResetOtp,
  verifyResetOtp,
};

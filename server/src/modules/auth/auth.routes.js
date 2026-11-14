import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  sendVerifyOtp,
  verifyEmail,
  sendResetOtp,
} from "#app/modules/auth/auth.controller.js";

import validateRequest from "#app/middleware/validate.middleware.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "#app/modules/auth/auth.validation.js";
import { isAuthenticated } from "#app/middleware/auth.middleware.js";

const authRouter = express.Router();

// Register User
authRouter.post("/register", validateRequest(registerUserSchema), registerUser);

// Login User
authRouter.post("/login", validateRequest(loginUserSchema), loginUser);

// Logout User
authRouter.post("/logout", isAuthenticated, logoutUser);

// Send email verification OTP
authRouter.post("/send-verify-otp", isAuthenticated, sendVerifyOtp);

// Verify Email OTP
authRouter.post("/verify-email", isAuthenticated, verifyEmail);

// Send password reset OTP
authRouter.post("/verify-reset-otp", sendResetOtp);

// Verify password reset OTP
authRouter.post("/verify-reset-otp", sendResetOtp);

export default authRouter;

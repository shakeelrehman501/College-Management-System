import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
} from "#app/modules/auth/auth.controller.js";

import validateRequest from "#app/middleware/validate.middleware.js";
import { registerUserSchema } from "#app/modules/auth/auth.validation.js";
import authenticateUser from "#app/middleware/auth.middleware.js";

const authRouter = express.Router();

// Register User
authRouter.post("/register", validateRequest(registerUserSchema), registerUser);

// Login User
authRouter.post("/login", loginUser);

// Logout User
authRouter.post("/logout", authenticateUser, logoutUser);

export default authRouter;

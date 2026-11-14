import jwt from "jsonwebtoken";
import userModel from "../modules/users/user.model.js";
import asyncHandler from "#app/utils/asyncHandler.js";

const isAuthenticated = asyncHandler(async (req, res, next) => {
  // 1. Get access token from HTTP-only cookie
  const token = req.cookies?.accessToken;

  if (!token) {
    throw new ApiError(401, "Authentication required. Please log in.");
  }

  // 2. Verify JWT
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new ApiError(401, "Your session has expired. Please log in again.");
    }

    if (error.name === "JsonWebTokenError" || error.name === "NotBeforeError") {
      throw new ApiError(
        401,
        "Invalid authentication token. Please log in again.",
      );
    }

    throw error;
  }

  // 3. Find authenticated user
  const user = await userModel
    .findById(decodedToken.id)
    .select("_id name email role isAccountVerified");

  if (!user) {
    throw new ApiError(
      401,
      "User account no longer exists. Please log in again.",
    );
  }

  // 4. Attach authenticated user to request
  req.user = {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };

  // 5. Continue to next middleware/controller
  next();
});

const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.json({ success: false, message: "Forbidden: Access is denied." });
    }
  };
};

export {isAuthenticated, requireRole}
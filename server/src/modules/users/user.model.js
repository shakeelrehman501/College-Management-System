import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "teacher", "student"],
      default: "student",
      required: true,
    },
    approvalStatus: {
      // for student and teachers
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },
    adminApprovalStatus: {
      // for admins only
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: function () {
        return this.role === "admin" ? "pending" : undefined;
      },
    },
    isAccountVerified: { type: Boolean, default: true },
    verifyOtp: { type: String, select: false },
    verifyOtpExpiresAt: { type: Date, select: false },
    resetOtp: { type: String, select: false },
    resetOtpExpiresAt: { type: Date, select: false },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;

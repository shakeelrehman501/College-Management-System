// import ApiError from "../utils/ApiError.js";
import ApiError from "#app/utils/ApiError.js";

const globalErrorHandler = (error, req, res, next) => {
  let a = error instanceof ApiError;
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: error.success,
      message: error.message,
    });
  }

  if (error.name === "ValidationError") {
    console.log("Validation Error iss: " + error);
    return res.status(411).json({
      success: false,
      message: error._message,
    });
  }
  console.error("Unknown error", error);

  return res.status(488).json({
    success: false,
    message: "Something went wrong",
    error,
  });
};

export default globalErrorHandler;

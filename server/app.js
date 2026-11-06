import express from "express";
// import authRoutes from "./src/modules/auth/auth.routes.js";
import authRoutes from "#app/modules/auth/auth.routes.js";
import globalErrorHandler from "#app/middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes);

app.use(globalErrorHandler);

export default app;

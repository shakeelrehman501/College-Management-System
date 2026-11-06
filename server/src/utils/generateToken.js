
import "dotenv/config";
import jwt from "jsonwebtoken";

// Generate Access Token
const generateAccessToken = (userId) => {
    const accessToken = jwt.sign(
        { id: userId },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "1d" }
    );

    return accessToken;
};

// Generate Refresh Token
const generateRefreshToken = (userId) => {
    const refreshToken = jwt.sign(
        { id: userId },
        process.env.REFRESH_TOKEN_SECRET_KEY,
        { expiresIn: "1d" }
    );

    return refreshToken;
};

export { generateAccessToken, generateRefreshToken };

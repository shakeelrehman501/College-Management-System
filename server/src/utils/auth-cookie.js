
import "dotenv/config";

const authCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
    maxAge: 1000 * 60 * 60 * 24,
};

const setAuthCookie = (res, accessToken) => {
    res.cookie("token", accessToken, authCookieOptions);
};

export default setAuthCookie;

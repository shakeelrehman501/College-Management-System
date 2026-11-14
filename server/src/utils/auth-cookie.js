import "dotenv/config";

const authCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
  path: "/",
};

const setAuthCookie = (res, accessToken) => {
  res.cookie("accesstoken", accessToken, {
    ...authCookieOptions,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  });
};

const clearAuthCookie = (res) => {
  res.clearCookie("accessToken", authCookieOptions);
};

export { setAuthCookie, clearAuthCookie };

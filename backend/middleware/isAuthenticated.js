import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized HTTP, Token not provided",
        status: 401,
      });
    }

    const decodeToken = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decodeToken) {
      return res.status(401).json({
        message: "Invalid token",
        status: 401,
      });
    }

    req.id = decodeToken.userId;
    next();
  } catch (error) {
    console.log("Error while authenticating token", error);
    return res.status(401).json({
      message: error.message,
      status: 401,
    });
  }
};

export default isAuthenticated;

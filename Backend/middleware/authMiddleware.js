import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../modals/userModal.js";

//protect routs
const protect = asyncHandler(async (req, res, next) => {
  let token;
  //read the JWT from cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Message: Not Authorized, Token Failed");
    }
  } else {
    res.status(401);
    throw new Error("Message: Not Authorized, no Token");
  }
});

//Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error(" Message: Not Authoriged as Admin");
  }
};

export { protect, admin };

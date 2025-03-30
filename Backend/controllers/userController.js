import User from "../modals/userModal.js";
import { generateTokens } from "../utils/generateTokan.js";
import asyncHandler from "../middleware/asyncHandler.js";

//@desc Auth and User Tokan
//@desc GET /api/users/login
//@desc   acces public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateTokens(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
    });
  } else {
    res.status(401);
    throw new Error("message: Invalid Email and Password");
  }
});

//@desc LogOut user / cleat cookies
//@desc POST /api/users/logut
//@desc    Private

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json("message: logged out succesfully");
});

//@desc register user
//@desc POST /api/users
//@desc   acces public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("user already Exist");
  } else if (password.length < 6) {
    res.status(400);
    throw new Error("password must be at least 6 characters");
  }
  const user = await User.create({
    name,
    email,
    phone,
    password,
    role,
  });
  if (user) {
    generateTokens(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Error invalid data");
  }
});

export { authUser, registerUser, logoutUser };

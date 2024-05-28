const httpStatus = require("http-status");
const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");

const signup = catchAsync(async (req, res) => {
  const reqUser = req.body;
  const user = await userService.signup(reqUser);
  res.status(httpStatus.CREATED).send(user);
});

const signin = catchAsync(async (req, res) => {
  const user = await userService.signin(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getProfile = catchAsync(async (req, res) => {
  const {_id} = req.user;
  console.log(_id, "id in con")
  const user = await userService.getProfile(_id);
  res.status(httpStatus.OK).send(user);
});

module.exports = {
  signup,
  signin,
  getProfile
};

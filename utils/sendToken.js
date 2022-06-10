export const sendToken = (res, user, statusCode, message) => {
  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    tasks: user.tasks,
    verified: user.verified
  };
  const token = user.getJWTToken();
  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE *60 *24 *60 *1000),
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user: userData,
    message,
  });
};

const catchAsync = (fn) => (req, res, next) => {
  console.log(req.body, "jj")
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;

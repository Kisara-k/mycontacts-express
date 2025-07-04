const { ERROR_TITLES, HTTP_STATUS } = require("../utils/constants");

const errorHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode >= 400 ? res.statusCode : HTTP_STATUS.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    title: ERROR_TITLES[statusCode] || "Error",
    message: err.message,
    stackTrace: err.stack,
  });
};

module.exports = errorHandler;

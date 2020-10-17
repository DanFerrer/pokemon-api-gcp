class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, req, res, next) => {
  const { statusCode, message } = err;
  
  if (!statusCode || statusCode === 500) {
    return (process.env.NODE_ENV === 'production' ? res.status(500).send('Internal Server Error') : res.status(500).send(err.stack));
  }

  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

module.exports = {
  ErrorHandler,
  handleError
};
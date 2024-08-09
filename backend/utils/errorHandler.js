const errorHandler = (status, message) => {
  const error = new Error(message);
  error.status = status;
  error.message = message;
  return error;
};

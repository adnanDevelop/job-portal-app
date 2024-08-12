export const responseHandler = (res, status, message, data) => {
  return res.status(status).json({
    status,
    message,
    data: data,
  });
};

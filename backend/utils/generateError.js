const GenerateError = (errMessage = "", status = 400, data = {}) => {
  const err = new Error(errMessage);
  err.status = status;
  err.data = data;
  throw err;
};
export default GenerateError;

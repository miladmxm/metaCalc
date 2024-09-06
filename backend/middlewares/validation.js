import GenerateError from "../utils/generateError.js";

const validation = (validateInstance) => {
  return (req, res, next) => {
    try {
      const valid = validateInstance(req.body);
      if (!valid) {
        GenerateError("Validation Error", 400, validateInstance.errors);
      } else {
        next();
      }
    } catch (err) {
      next(err);
    }
  };
};
export default validation;

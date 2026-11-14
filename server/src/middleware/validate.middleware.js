const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join(".") || "body",
        message: issue.message,
      }));

      return res.status(400).json({
        success: false,
        message: "Request validation failed",
        errors,
      });
    }

    req.validatedData = result.data;

    next();
  };
};

export default validateRequest;

// const validateRequest = (schema, source = "body") => {
//   return (req, res, next) => {
//     const result = schema.safeParse(req[source]);
//     if (!result.success) {
//       return res.status(299).json({
//         success: false,
//         message: result.error.issues[0].message,
//       });
//     }
//     req[source] = result.data;
//     next();
//   };
// };

const validateRequest = (schema, source = "body") => {
  return (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return res.status(299).json({
        success: false,
        message: result.error.issues[0].message,
      });
    }
    req[source] = result.data;
    next();
  };
};

export default validateRequest;

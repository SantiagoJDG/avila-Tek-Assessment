import { ValidationError } from "sequelize";

export const logErrors =(err, req, res, next) => {
  console.error(err);
  next(err);
}

export const errorHandler =(err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export const boomErrorHandler =(err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

export const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
  next(err);
}

export const notFoundMiddleware = (err, req, res, next) => {
  res.status(404).json({
    message: err.message,
    stack: err.stack,
  });
};

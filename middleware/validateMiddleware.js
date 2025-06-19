import { validationResult } from 'express-validator';

export function validateMiddleware(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // console.log('inside validator error');
    const errorarr = errors.array();
    console.log(errorarr[0].msg);

    // Pass the first error message to the view
    return res.status(400).json({
      message: errorarr[0].msg,
    });
  }

  // console.log('no error in validation');

  next(); // No validation errors, continue to controller
}

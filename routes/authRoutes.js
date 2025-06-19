import express from 'express';
import { authenticateUser, addUser } from '../controllers/authControllers.js';
import { validateMiddleware } from '../middleware/validateMiddleware.js';
import { signupSchema, loginSchema } from '../validatorSchema/validator.js';
// import { asyncHandler } from '../middleware/asyncHandler.js';

const router = express.Router();

router.post(
  '/login',
  // loginSchema,
  // validateMiddleware,
  //asyncHandler(authenticateUser)
  authenticateUser
);

// POST: /auth/add-user (signup)
router.post(
  '/sign-up',
  // signupSchema,
  // validateMiddleware,
  // asyncHandler(addUser)
  addUser
);

export default router;

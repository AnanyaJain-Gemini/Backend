import express from 'express';
import {
  listAllUsers,
  aboutUser,
  deleteUser,
  newUser,
  editDetail,
} from '../controllers/userControllers.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { editUserSchema, newUserSchema } from '../validatorSchema/validator.js';
import { validateMiddleware } from '../middleware/validateMiddleware.js';

//router.route
const router = express.Router();

// list all users
router.get('/', listAllUsers);

// get a particular user
router.get('/about/:id', aboutUser);

// delete a particular user
router.get('/delete/:id', authenticateToken, deleteUser);

// add new user
// router.get('/add-user', authenticateToken, addUser);
router.post(
  '/users/new-user',
  authenticateToken,
  newUserSchema,
  validateMiddleware,
  newUser
);

//edit details of a user
//router.get('/edit/:id', authenticateToken, editForm);
router.patch(
  '/edit-user-detail',
  authenticateToken,
  editUserSchema,
  validateMiddleware,
  editDetail
);

//export the router
export default router;

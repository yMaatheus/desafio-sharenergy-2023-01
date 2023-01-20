import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../models/User';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

const userODM = new User();
const userService = new UserService(userODM);
const userController = new UserController(userService);

const route = Router();

route.route('/')
  .post(userController.login);

route.get('/me', authMiddleware, (_req, res) => (
  res.status(StatusCodes.OK).json(res.locals.user)
));

export default route;
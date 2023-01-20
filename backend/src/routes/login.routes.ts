import { Router } from 'express';
import { User } from '../models/User';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';

const userODM = new User();
const userService = new UserService(userODM);
const userController = new UserController(userService);

const route = Router();

route.route('/')
  .post(userController.login);

export default route;
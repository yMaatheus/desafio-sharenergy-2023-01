import { Router } from 'express';
import { UserODM } from '../models/UserODM';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';

const userODM = new UserODM();
const userService = new UserService(userODM);
const userController = new UserController(userService);

const route = Router();

route.route('/')
  .post(userController.login);

export default route;
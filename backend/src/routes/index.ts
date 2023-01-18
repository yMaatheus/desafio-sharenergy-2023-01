import { Router } from 'express';
import login from './login.routes';
import user from './user.routes';

const route = Router();

route.use('/login', login);
route.use('/user', user);

export default route;
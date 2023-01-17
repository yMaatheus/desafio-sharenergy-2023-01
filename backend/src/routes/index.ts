import { Router } from 'express';
import login from './login.routes';

const route = Router();

route.use('/login', login);

export default route;
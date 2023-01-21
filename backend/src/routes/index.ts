import { Router } from 'express';
import login from './login.routes';
import customer from './customer.routes';

const route = Router();

route.use('/login', login);
route.use('/customer', customer);

export default route;
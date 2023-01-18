import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import auth from '../middlewares/auth.middleware';

const route = Router();

route.get('/me', auth, (_req, res) => (
  res.status(StatusCodes.OK).json(res.locals.user)
));

export default route;
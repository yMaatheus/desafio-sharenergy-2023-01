import { NextFunction, Request, Response } from 'express';
import jwtProvider from '../providers/jwt.provider';
import { ErrorTypes } from '../errors/catalog';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) throw Error(ErrorTypes.TokenNotFound);

  const { user } = jwtProvider.verify(token);

  res.locals.user = user;

  next();
};

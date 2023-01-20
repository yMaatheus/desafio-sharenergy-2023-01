import Joi from 'joi';
import { ErrorTypes } from '../../errors/catalog';
import { IUser } from '../../models/User';

const validateUser = (user: IUser) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  });
  const { error, value } = schema.validate(user);

  if (error) throw Error(ErrorTypes.AllFieldsMustBeFilled);

  return value;
};

export default validateUser;
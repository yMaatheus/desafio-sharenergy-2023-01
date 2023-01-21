import Joi from 'joi';
import { ErrorTypes } from '../../errors/catalog';
import { ICustomer } from '../../models/Customer';

export const validateCustomerCreate = (customer: ICustomer) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    cpf: Joi.string().required(),
  });

  const { error, value } = schema.validate(customer);

  if (error) throw Error(ErrorTypes.AllFieldsMustBeFilled);

  return value;
};

export const validateCustomerUpdate = (customer: ICustomer) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    phone: Joi.string(),
    address: Joi.string(),
    cpf: Joi.string(),
  });

  const { error, value } = schema.validate(customer);

  if (error) throw Error(ErrorTypes.FieldWithInvalidFormat);

  return value;
};
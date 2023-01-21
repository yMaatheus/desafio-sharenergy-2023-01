import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';
import auth from '../middlewares/auth.middleware';
import { Customer } from '../models/Customer';
import CustomerService from '../services/customer.service';

const customer = new Customer();
const customerService = new CustomerService(customer);
const customerController = new CustomerController(customerService);

const route = Router();

route.route('/')
  .post(auth, customerController.create)
  .get(auth, customerController.getAll);

route.route('/:id')
  .get(auth, customerController.getById)
  .put(auth, customerController.updateById)
  .delete(auth, customerController.deleteById);

export default route;
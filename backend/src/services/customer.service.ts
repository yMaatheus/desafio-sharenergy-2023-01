import { ErrorTypes } from '../errors/catalog';
import { ICustomer, ICustomerModel } from '../models/Customer';
import { validateCustomerCreate } from './validations/customer.validate';

export interface ICustomerService {
  create(customer: ICustomer): Promise<ICustomer>;
  getAll(): Promise<ICustomer[]>;
  getById(id: string): Promise<ICustomer>;
  updateById(id: string, customer: ICustomer): Promise<ICustomer>;
  deleteById(id: string): Promise<ICustomer>;
}

class CustomerService implements ICustomerService {
  constructor(private _customer: ICustomerModel) { }

  public async create(customer: ICustomer) {
    validateCustomerCreate(customer);
    return this._customer.create(customer);
  }

  public async getAll() {
    return this._customer.findAll();
  }

  public async getById(id: string) {
    if (!id) throw Error(ErrorTypes.InvalidId);
    return this._customer.findById(id);
  }

  public async updateById(id: string, customer: ICustomer) {
    if (!id) throw Error(ErrorTypes.InvalidId);
    return this._customer.update(id, customer);
  }

  public async deleteById(id: string) {
    if (!id) throw Error(ErrorTypes.InvalidId);
    return this._customer.delete(id);
  }
}

export default CustomerService;

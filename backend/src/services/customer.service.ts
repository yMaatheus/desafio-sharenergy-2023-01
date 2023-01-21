import { ErrorTypes } from '../errors/catalog';
import { ICustomer, ICustomerModel } from '../models/Customer';

export interface ICustomerService {
  getAll(): Promise<ICustomer[]>;
  getById(id: string): Promise<ICustomer | null>;
}

class CustomerService implements ICustomerService {
  constructor(private _customer: ICustomerModel) { }

  public async getAll() {
    return this._customer.findAll();
  }

  public async getById(id: string) {
    if (!id) throw Error(ErrorTypes.InvalidId);
    const customer = this._customer.findById(id);
    if (!customer) throw Error(ErrorTypes.ObjectNotFound);
    return customer;
  }
}

export default CustomerService;

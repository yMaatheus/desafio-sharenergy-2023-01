import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICustomerService } from '../services/customer.service';

export default class CustomerController {
  constructor(private _service: ICustomerService) {
    this.getAll = this.getAll.bind(this);
  }

  public async getAll(_req: Request, res: Response) {
    const customers = await this._service.getAll();
    return res.status(StatusCodes.OK).json(customers);
  }
}
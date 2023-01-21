import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICustomerService } from '../services/customer.service';

export default class CustomerController {
  constructor(private _service: ICustomerService) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  public async create(req: Request, res: Response) {
    const customer = await this._service.create(req.body);
    return res.status(StatusCodes.OK).json(customer);
  }

  public async getAll(_req: Request, res: Response) {
    const customers = await this._service.getAll();
    return res.status(StatusCodes.OK).json(customers);
  }

  public async getById(req: Request, res: Response) {
    const customer = await this._service.getById(req.params.id);
    return res.status(StatusCodes.OK).json(customer);
  }

  public async updateById(req: Request, res: Response) {
    const customer = await this._service.updateById(req.params.id, req.body);
    return res.status(StatusCodes.OK).json(customer);
  }

  public async deleteById(req: Request, res: Response) {
    const customer = await this._service.deleteById(req.params.id);
    return res.status(StatusCodes.OK).json(customer);
  }
}
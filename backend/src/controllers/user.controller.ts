import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IToken from '../interfaces/IToken';
import { IUserService } from '../services/user.service';

export default class UserController {
  constructor(private _service: IUserService) { 
    this.login = this.login.bind(this)
  }

  public async login(req: Request, res: Response<IToken>) {
    const { userName, password } = req.body;

    const result = await this._service.login({ userName, password });
    return res.status(StatusCodes.OK).json(result);
  }
}
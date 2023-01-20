import { ErrorTypes } from '../errors/catalog';
import IToken from '../interfaces/IToken';
import { IUser, IUserModel } from '../models/User';
import { checkPassword } from '../providers/bcrypt.provider';
import jwtProvider from '../providers/jwt.provider';
import validateUser from './validations/user.validate';

export interface IUserService {
  login(user: IUser): Promise<IToken>;
}

class UserService implements IUserService {
  constructor(private _user: IUserModel) { }

  public async login(user: IUser) {
    const { userName, password } = user;
    validateUser(user);

    const result = await this._user.findOne(userName);

    if (!result) throw Error(ErrorTypes.ObjectNotFound);
    if (!checkPassword(password, result.password)) throw Error(ErrorTypes.InvalidCredentials);

    const token = jwtProvider.signUser({ userName });
    return { token };
  }
}

export default UserService;

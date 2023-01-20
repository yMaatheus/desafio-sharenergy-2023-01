import { ErrorTypes } from '../errors/catalog';
import IToken from '../interfaces/IToken';
import { IUser, IUserModel } from '../models/User';
import { checkPassword } from '../providers/bcrypt.provider';
import jwtProvider from '../providers/jwt.provider';

export interface IUserService {
  login(user: IUser): Promise<IToken>;
}

class UserService implements IUserService {
  constructor(private _user: IUserModel) { }

  public async login({ userName, password }: IUser) {
    const user = await this._user.findOne(userName);
    if (!user) throw Error(ErrorTypes.ObjectNotFound);
    if (!checkPassword(password, user.password)) throw Error(ErrorTypes.InvalidCredentials);

    const token = jwtProvider.signUser({ userName });
    return { token };
  }
}

export default UserService;

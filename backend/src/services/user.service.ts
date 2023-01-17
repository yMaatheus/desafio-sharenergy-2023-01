import { ErrorTypes } from '../errors/catalog';
import IToken from '../interfaces/IToken';
import { IUser, UserODM } from '../models/UserODM';
import { checkPassword } from '../providers/bcrypt.provider';
import jwtProvider from '../providers/jwt.provider';

class UserService {
  constructor(private _user: UserODM) { }

  public async login({ userName, password }: IUser): Promise<IToken> {
    const user = await this._user.findOne(userName);
    if (!user) throw Error(ErrorTypes.ObjectNotFound);
    if (!checkPassword(password, user.password)) throw Error(ErrorTypes.InvalidCredentials);

    const token = jwtProvider.signUser({ userName });
    return { token };
  }
}

export default UserService;

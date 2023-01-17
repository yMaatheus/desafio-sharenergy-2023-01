import * as dotenv from 'dotenv';
import { verify, sign, SignOptions, JwtPayload } from 'jsonwebtoken';
import { ErrorTypes } from '../errors/catalog';

dotenv.config();

const SECRET = `${process.env.JWT_SECRET}`;
const options: SignOptions = { expiresIn: '15d', algorithm: 'HS256' };

export interface IUserJWT {
  userName: string,
}

class JwtProvider {
  constructor(private secret: string, private signOptions: SignOptions) {}

  signUser(user: IUserJWT): string {
    return this.sign({ user });
  }

  sign(payload: JwtPayload): string {
    return sign(payload, this.secret, this.signOptions);
  }

  verify(token: string): JwtPayload {
    try {
      return verify(token, this.secret, this.signOptions) as JwtPayload;
    } catch (_err) {
      throw Error(ErrorTypes.InvalidCredentials);
    }
  }
}

export default new JwtProvider(SECRET, options);
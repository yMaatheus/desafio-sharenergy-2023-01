
import bcrypt from 'bcryptjs';

export const userValidDatabase = { userName: 'user_valid', password: bcrypt.hashSync('password_valid', bcrypt.genSaltSync(10)) }
export const userValid = { userName: 'user_valid', password: 'password_valid' }
export const userInvalid = { userName: 'user_invalid', password: 'password_invalid' }
export const userValidWithPasswordInvalid = { userName: 'user_valid', password: 'password_invalid' }

export const tokenValid = { token: 'token_valid' }
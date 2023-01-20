
import bcrypt from 'bcryptjs';

export const userValidDatabase = { userName: 'user_valid', password: bcrypt.hashSync('password_valid', bcrypt.genSaltSync(10)) }
export const userValid = { userName: 'user_valid', password: 'password_valid' }

export const tokenValid = { token: 'token_valid' }
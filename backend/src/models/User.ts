import { Model, Schema, model, models } from 'mongoose';

export interface IUser {
  userName: string;
  password: string;
}

export interface IUserModel {
  findOne(userName: string): Promise<IUser | null>;
}

export class User implements IUserModel {
  private schema: Schema;
  private model: Model<IUser>;

  constructor() {
    this.schema = new Schema<IUser>({
      userName: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    }, { versionKey: false });
    this.model = models.User || model('User', this.schema);
  }

  public async findOne(userName: string): Promise<IUser | null> {
    return this.model.findOne({ userName });
  }
}
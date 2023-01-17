import { Model, Schema, model, models } from 'mongoose';

export interface IUser {
  userName: string;
  password: string;
}

export class UserODM {
  private schema: Schema;
  private model: Model<IUser>;

  constructor() {
    this.schema = new Schema<IUser>({
      userName: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    });
    this.model = models.User || model('User', this.schema);
  }

  public async create(user: IUser): Promise<IUser> {
    return this.model.create({ ...user });
  }

  public async findOne(userName: string): Promise<IUser | null> {
    return this.model.findOne({ userName });;
  }
}
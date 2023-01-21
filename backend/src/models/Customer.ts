import { Model, Schema, model, models, UpdateQuery, ObjectId } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';

export interface ICustomer {
  _id?: ObjectId;
  email: string;
  name: string;
  phone: string;
  address: string;
  cpf: string;
}

export interface ICustomerModel {
  create(customer: ICustomer): Promise<ICustomer>;
  findAll(): Promise<ICustomer[]>;
  findById(id: string): Promise<ICustomer>;
  update(id: string, customer: ICustomer): Promise<ICustomer>;
  delete(id: string): Promise<ICustomer>;
}

export class Customer implements ICustomerModel {
  private schema: Schema;
  private model: Model<ICustomer>;

  constructor() {
    this.schema = new Schema<ICustomer>({
      email: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      cpf: { type: String, required: true },
    }, { versionKey: false });
    this.model = models.Customer || model('Customer', this.schema);
  }

  public async create(customer: ICustomer) {
    try {
      return await this.model.create({ ...customer });
    } catch (error) {
      throw new Error(ErrorTypes.ObjectAlreadyExistsDatabase);
    }
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(_id: string): Promise<ICustomer> {
    try {
      const customer = await this.model.findById(_id) as ICustomer;
      if (!customer) throw new Error(ErrorTypes.ObjectNotFound);
      return customer;
    } catch (error) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }
  }

  public async update(_id: string, customer: ICustomer): Promise<ICustomer> {
    try {
      const update = customer as UpdateQuery<ICustomer>;
      const result = await this.model.findByIdAndUpdate(_id, update, { new: true });
      return result as ICustomer;
    } catch (error) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }
  }

  public async delete(_id: string): Promise<ICustomer> {
    try {
      return await this.model.findByIdAndDelete(_id) as ICustomer;
    } catch (error) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }
  }
}
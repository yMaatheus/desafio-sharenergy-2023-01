import { Model, Schema, model, models, UpdateQuery, ObjectId } from 'mongoose';

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
  findById(id: string): Promise<ICustomer | null>;
  update(id: string, customer: ICustomer): Promise<ICustomer>;
  delete(id: string): Promise<ICustomer | null>;
}

export class Customer {
  private schema: Schema;
  private model: Model<ICustomer>;

  constructor() {
    this.schema = new Schema<ICustomer>({
      email: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      cpf: { type: String, required: true },
    });
    this.model = models.Customer || model('Customer', this.schema);
  }

  public async create(customer: ICustomer): Promise<ICustomer> {
    return this.model.create({ ...customer });
  }

  public async findAll(): Promise<ICustomer[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<ICustomer | null> {
    return this.model.findById(_id);
  }

  public async update(_id: string, customer: ICustomer): Promise<ICustomer> {
    const update = customer as UpdateQuery<ICustomer>;
    const result = await this.model.findByIdAndUpdate(_id, update, { new: true });
    return result as ICustomer;
  }

  public async delete(_id: string): Promise<ICustomer | null> {
    return this.model.findByIdAndDelete(_id);
  }
}
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv/config');

const { MONGO_URI, MONGO_DB, MONGO_USER, MONGO_PASS } = process.env;

mongoose.set('strictQuery', false);

const options = {
  dbName: MONGO_DB,
  user: MONGO_USER,
  pass: MONGO_PASS,
};

const connectToDatabase = (URI = MONGO_URI) => {
  if (!URI) throw new Error('No URI provided to connect to database');
  return mongoose.connect(URI, options);
};

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

const customerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cpf: { type: String, required: true },
}, { versionKey: false });

const Customer = mongoose.model('Customer', customerSchema);

connectToDatabase()
  .then(async () => {
    console.log('Connected to database');
    const seedUsers = [
      { userName: 'desafiosharenergy', password: bcrypt.hashSync('sh@r3n3rgy', bcrypt.genSaltSync(10)) },
      { userName: 'admin', password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(10)) },
      { userName: 'matheus', password: bcrypt.hashSync('matheus', bcrypt.genSaltSync(10)) },
    ];

    const seedCustomers = [{ email: "random@gmail.com", name: "random", phone: "(11) 9 9235-4532", address: "Rua Random, 120", cpf: "910.930.725-89" }];

    console.log('Seeding in database...');

    await User.deleteMany({});
    await User.insertMany(seedUsers);

    await Customer.deleteMany({});
    await Customer.insertMany(seedCustomers);
    console.log('Seed has completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
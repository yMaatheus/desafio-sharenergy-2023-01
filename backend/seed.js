const mongoose = require('mongoose');
require('dotenv/config');

const { MONGO_URI, MONGO_DB, MONGO_USER, MONGO_PASS } = process.env;

mongoose.set("strictQuery", false);

const options = {
  dbName: MONGO_DB,
  user: MONGO_USER,
  pass: MONGO_PASS,
}

const connectToDatabase = (URI = MONGO_URI) => {
  if (!URI) throw new Error('No URI provided to connect to database');
  return mongoose.connect(URI, options);
}

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

connectToDatabase()
  .then(async () => {
    console.log('Connected to database');
    const seedUsers = [{ userName: 'desafiosharenergy', password: 'sh@r3n3rgy' }];

    console.log('Seeding in database...');

    await User.deleteMany({})
    await User.insertMany(seedUsers)
    console.log('Seed has completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
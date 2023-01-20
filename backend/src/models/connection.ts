import mongoose from 'mongoose';
import 'dotenv/config';

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

export default connectToDatabase;
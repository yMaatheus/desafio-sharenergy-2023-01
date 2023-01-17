import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import error from './middlewares/error.middleware';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(error);

export default app;
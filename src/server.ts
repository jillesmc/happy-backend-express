import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import dotenv from 'dotenv';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(3333);

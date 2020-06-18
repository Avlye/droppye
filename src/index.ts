import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import routes from './routes';
import endpoint from './config/endpoint';

const app = express();

/**
 * Database Setup
 */

mongoose.connect(endpoint.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(3000);

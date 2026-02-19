
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import initializePassport from './config/passport.config.js';

import productRoutes from './routes/products.routes.js';
import userRoutes from './routes/users.routes.js';
import cartRoutes from './routes/carts.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.error(err));

app.listen(process.env.PORT || 8080, () => {
  console.log("Servidor corriendo en puerto", process.env.PORT);
});

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cryptoRoutes from './routes/cryptoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Coinbase clone backend API is running.' });
});

app.use('/', authRoutes);
app.use('/', cryptoRoutes);

app.use('/api', authRoutes);
app.use('/api', cryptoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

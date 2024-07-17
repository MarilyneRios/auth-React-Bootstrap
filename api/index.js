import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json()); 
// Middleware pour parser cookies
app.use(cookieParser());

//Routes
app.use('/api/user', userRoutes);  
app.use('/api/auth', authRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });

// serveur sur le port process.env.PORT
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



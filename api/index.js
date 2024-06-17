import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoute.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json()); 


//routes
app.use('/api/user', userRoutes);  
app.use('/api/auth', authRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: 'Erreur du serveur' });
});

// serveur sur le port process.env.PORT
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



import User from '../models/userModel.js';

export const display = (req, res) => {
    res.json({
        message: 'hello world on api/authRoutes and authControllers',
    });
};

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password});
    try {
        await newUser.save();
        res.status(201).json({ message: 'Inscription réussie' });
      } catch (error) {
        next(error);
      }
};

export const signin = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Connexion réussie',
    });
};

export const signout = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Déconnexion réussie',
    });
};

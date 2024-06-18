import User from '../models/userModel.js';

export const display = (req, res) => {
    res.json({
        message: 'hello world on api/authRoutes and authControllers',
    });
};

export const signup = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Inscription réussie',
    });
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

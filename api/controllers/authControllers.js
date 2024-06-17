import User from '../models/userModel.js';

export const display = (req, res) => {
    res.json({
        message: 'hello world on api/authRoutes and authControllers',
    });
};

export const signup = async (req, res, next) => {
    try {
        console.log(req.body);
        res.status(200).json({
            message: 'Inscription réussie',
            data: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        });
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    console.log(req.body);
    res.json({
        message: 'Connexion réussie',
        data: req.body
    });
};

export const signout = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Déconnexion réussie'
    });
};

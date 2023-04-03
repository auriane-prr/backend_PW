const bcrypt = require('bcrypt');
const User = require('../models/user');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {     // crypte le mdp
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save() // enregistre le nouvel utilisateur
                .then(() => res.status(201).json({ message: 'Utilisateur crée'}))
                .catch(error => res.status(400).json({ error}));
        })
        .catch(error => res.status(500).json({ error}));
};

exports.login = (req, res, next) => {

};
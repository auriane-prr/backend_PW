const bcrypt = require('bcrypt');
const User = require('../models/user');


exports.signup = (req, res, next) => {  //ajout user dans bd
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
    User.findOne({email: req.body.email})
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'}); // si utilisateur pas dans bd
        }
        bcrypt.compare(req.body.password, user.password)    //compare mdp entré par le user avec le hash enregistré dans bd
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                }
                res.status(200).json({
                    userId: user._id,
                    token: 'TOKEN'
                });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({error}));
};
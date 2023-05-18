// const bcrypt = require('bcrypt');
// const User = require('../models/user');
// const jwt = require('jsonwebtoken');

// exports.signup = (req, res, next) => {
  
//   bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//       const user = new User({
//         email: req.body.email,
//         password: hash,
//         pseudo: req.body.pseudo,
//         loc: req.body.loc,
//       });

//       user.save()
//         .then(() => {
//           res.status(201).json({ message: "Utilisateur créé" });
//         })
//         .catch(error => {
//           res.status(400).json({ message: "Erreur lors de la création de l'utilisateur", error: error });
//         });
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Erreur lors du hachage du mot de passe", error: error });
//     });
// };

// exports.login = (req, res, next) => {
//     User.findOne({email: req.body.email})
//     .then(user => {
//         if (!user) {
//             return res.status(401).json({ message: "Paire login/mot de passe incorrecte (user)"}); // si utilisateur pas dans bd
//         }
//         else {
//         bcrypt.compare(req.body.password, user.password)    //compare mdp entré par le user avec le hash enregistré dans bd
//             .then(valid => {
//                 if (!valid) {
//                     return res.status(401).json({ message: "Paire login/mot de passe incorrecte (valid)" });
//                 }
//                 const token = jwt.sign(
//                   { userId: user._id },
//                   process.env.JWT_SECRET,
//                   { expiresIn: '24h' }
//                 );
      
//                 res.status(200).json({
//                   message: "Connexion réussie !",
//                   userId: user._id,
//                   token: token
//                 });
//               })
//               .catch(error => {
//                 res.status(500).json({ message: "Erreur lors de la comparaison du mot de passe", error: error });
//               });
//           }})
//           .catch(error => {
//             res.status(500).json({ message: "Erreur lors de la recherche de l'utilisateur", error: error });
//           });
//       };

// CHATGPT

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Fonction d'inscription d'un nouvel utilisateur
async function signup(req, res) {
  try {
    const { email, password, pseudo, localisation} = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Cet utilisateur existe déjà' });
    }

    // Crypter le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = await User.create({ email, password: hashedPassword, pseudo, localisation });

    res.status(201).json({ message: 'Inscription réussie', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'inscription', error });
  }
}

// Fonction de connexion de l'utilisateur
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    // Vérifier si le mot de passe est correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    // Générer un token d'authentification
    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la connexion', error });
  }
}

module.exports = { signup, login };
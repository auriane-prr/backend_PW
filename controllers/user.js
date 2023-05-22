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

async function getUser(req, res) {
  try {
    const userEmail = req.params.email;

    // Rechercher l'utilisateur dans la base de données
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des données utilisateur', error });
  }
}

module.exports = { signup, login, getUser };
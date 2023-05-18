// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];  // isole partie du token que l'on veut récupérer
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);  // décode le token
//         const userId = decodedToken.userId;
//         req.auth = {
//             userId: userId
//         };
//         next();  // Appel à la fonction next() pour passer au middleware suivant
//     } catch (error) {
//         res.status(401).json({ error: "Authentification requise" });
//     }
// };

// CHATGPT

// middleware/auth.js

const jwt = require('jsonwebtoken');

// Middleware pour vérifier l'authenticité du token
function authMiddleware(req, res, next) {
  // Récupérer le token d'authentification depuis le header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Aucun token d\'authentification fourni' });
  }

  // Vérifier le token
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token d\'authentification invalide' });
    }

    // Ajouter l'ID utilisateur décodé à l'objet de requête
    req.userId = decoded.userId;

    // Passer au middleware suivant
    next();
  });
}

module.exports = authMiddleware;
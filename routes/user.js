// const express = require('express');
// const router = express.Router();

// const userCtrl = require('../controllers/user');

// router.post('/signup', userCtrl.signup);    //post car lié au front
// router.post('/login', userCtrl.login);

// module.exports = router;

// CHATGPT

const express = require('express');
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Accès autorisé à la ressource protégée' });
});

module.exports = router;
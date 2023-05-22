const express = require('express');
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Accès autorisé à la ressource protégée' });
});
router.get('/:email', userController.getUser);

module.exports = router;
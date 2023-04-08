const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const chatCtrl = require('../controllers/chat');

router.get('/', auth, chatCtrl.getAllChat);
router.post('/', auth, chatCtrl.getAllChat);
router.get('/:id',auth, chatCtrl.getAllChat);
router.put('/:id',auth, chatCtrl.getAllChat);
router.delete('/:id',auth, chatCtrl.getAllChat);

module.exports = router;
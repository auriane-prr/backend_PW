const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const chatCtrl = require('../controllers/chat');

router.get('/', chatCtrl.getAllChat);
router.post('/', chatCtrl.createChat);
router.get('/:id', chatCtrl.getOneChat);
router.put('/:id', chatCtrl.modifyChat);
router.delete('/:id', chatCtrl.deleteChat);

module.exports = router;
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const tipsCtrl = require('../controllers/tips');

router.get('/', auth, tipsCtrl.getAllTips);
router.post('/', auth, tipsCtrl.getAllTips);
router.get('/:id',auth, tipsCtrl.getAllTips);
router.put('/:id',auth, tipsCtrl.getAllTips);
router.delete('/:id',auth, tipsCtrl.getAllTips);

module.exports = router;
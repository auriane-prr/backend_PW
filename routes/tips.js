const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const tipsCtrl = require('../controllers/tips');

router.get('/', tipsCtrl.getAllTips);
router.post('/', tipsCtrl.createTips);
router.get('/:id', tipsCtrl.getOneTips);
router.put('/:id', tipsCtrl.modifyTips);
router.delete('/:id', tipsCtrl.deleteTips);

module.exports = router;
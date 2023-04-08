const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const defiCtrl = require('../controllers/defi');

router.get('/', auth, defiCtrl.getAllDefi);
router.post('/', auth, defiCtrl.getAllDefi);
router.get('/:id',auth, defiCtrl.getAllDefi);
router.put('/:id',auth, defiCtrl.getAllDefi);
router.delete('/:id',auth, defiCtrl.getAllDefi);

module.exports = router;
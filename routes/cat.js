const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const catCtrl = require('../controllers/cat');

router.get('/', auth, catCtrl.getAllCat);
router.post('/', auth, catCtrl.getAllCat);
router.get('/:id',auth, catCtrl.getAllCat);
router.put('/:id',auth, catCtrl.getAllCat);
router.delete('/:id',auth, catCtrl.getAllCat);

module.exports = router;
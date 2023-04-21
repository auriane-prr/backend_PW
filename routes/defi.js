const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const defiCtrl = require('../controllers/defi');

router.get('/', defiCtrl.getAllDefi);
router.post('/', defiCtrl.createDefi);
router.get('/:id', defiCtrl.getOneDefi);
router.put('/:id', defiCtrl.modifyDefi);
router.delete('/:id', defiCtrl.deleteDefi);

module.exports = router;
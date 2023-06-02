const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const partCtrl = require('../controllers/participe');

router.get('/', partCtrl.getAllParticipe);
router.post('/', partCtrl.createParticipe);
router.get('/:id', partCtrl.getOneParticipe);
router.put('/:id', partCtrl.modifyParticipe);
router.delete('/:email_u', partCtrl.deleteParticipe);


module.exports = router;
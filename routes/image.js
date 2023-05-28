const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const imageCtrl = require('../controllers/image');

router.get('/:nom_image', imageCtrl.getImage);
router.post('/', imageCtrl.createImage);

module.exports = router;
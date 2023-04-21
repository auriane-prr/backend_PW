const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const eventCtrl = require('../controllers/event');

router.get('/', eventCtrl.getAllEvent);
router.post('/', eventCtrl.createEvent);
router.get('/:id', eventCtrl.getOneEvent);
router.put('/:id', eventCtrl.modifyEvent);
router.delete('/:id', eventCtrl.deleteEvent);

module.exports = router;
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const eventCtrl = require('../controllers/event');

router.get('/', auth, eventCtrl.getAllEvent);
router.post('/', auth, eventCtrl.createEvent);
router.get('/:id',auth, eventCtrl.getOneEvent);
router.put('/:id',auth, eventCtrl.modifyEvent);
router.delete('/:id',auth, eventCtrl.deleteEvent);

module.exports = router;
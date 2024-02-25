const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/items',  controller.getExpenses);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/checkForTables',  controller.getTables);

module.exports = router;
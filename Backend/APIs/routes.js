const express = require('express');
const router = express.Router();
const controller = require('./controller');
const routeConstants = require('./properties').routeConstants;

router.get(routeConstants.TABLE_CHECK,  controller.getTables);

module.exports = router;
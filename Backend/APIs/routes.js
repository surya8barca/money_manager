const express = require('express');
const router = express.Router();
const controller = require('./controller');
const routeConstants = require('./properties').routeConstants;

router.get(routeConstants.NEW_TABLE_ROUTE,  controller.getTables);

module.exports = router;
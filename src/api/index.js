const { Router } = require('express');

const ussd = require('./ussd/index.js');

const router = new Router();

router.use('/ussd', ussd);

module.exports = router;

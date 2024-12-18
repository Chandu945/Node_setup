const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const getshop = require('../controllers/shopcontrollers');

const router = express.Router();

router.get('/', getshop);

module.exports = router;

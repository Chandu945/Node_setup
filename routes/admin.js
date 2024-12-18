const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { getaddproduct, postaddproduct } = require('../controllers/admincontrollers');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', getaddproduct);

// /admin/add-product => POST
router.post('/add-product', postaddproduct);

exports.routes = router;
exports.products = products;

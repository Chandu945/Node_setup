const adminData = require('../routes/admin');

const getshop = (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }


  module.exports = getshop
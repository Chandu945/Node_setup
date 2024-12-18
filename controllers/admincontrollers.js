
const products = [];
const getaddproduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

const postaddproduct =  (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }


module.exports = {getaddproduct , postaddproduct}
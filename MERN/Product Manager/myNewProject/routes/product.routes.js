const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.delete('/api/products/:id', ProductController.deleteProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
}


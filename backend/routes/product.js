const express = require('express');
const connection = require('../connection');
const router = express.Router();


//get all products
router.get('/getAll', (req, res, next) => {
    sql = `SELECT * FROM product`;
    connection.query(sql, (err, result) => {
        if(!err){
            return res.status(200).json({products: result});
        }else{
            return res.status(500).json(err);
        }
    });
}); 

//get all products below 5
router.get('/getLowQuantity', (req, res, next) => {
    sql = `SELECT * FROM product WHERE quantity < 6 ORDER BY quantity ASC`;
    connection.query(sql, (err, result) => {
        if(!err){
            return res.status(200).json({products: result});
        }else{
            return res.status(500).json(err);
        }
    });
}); 

//create product
router.post('/add', (req, res, next) => {
    let product = req.body;
    var sql = `INSERT INTO product (prodCode, prodName, quantity, price, dateAdd) VALUES ('${product.prodCode}', '${product.prodName}', '${product.quantity}', '${product.price}', CURDATE())`;
    connection.query(sql, (err, result) => {
        if(!err){
            return res.status(200).json({message: "Product added successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

//update product
router.patch('/update', (req, res, next) => {
    let product = req.body;
    var sql = "UPDATE product SET prodCode = ?, prodName = ?, quantity = ?, price = ?, dateAdd = CURDATE() WHERE id = ?";
    connection.query(sql, [product.prodCode, product.prodName, product.quantity, product.price, product.id], (err, result) => {
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message: "Product id not found"});
            }
            return res.status(200).json({message: "Product updated successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});


//delete product
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    var sql = "DELETE FROM product WHERE id = ?";
    connection.query(sql, id, (err, result) => {
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message: "Product id not found"});
            }
            return res.status(200).json({message: "Product deleted successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

module.exports = router;
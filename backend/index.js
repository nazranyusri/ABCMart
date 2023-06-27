const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/product', productRoutes);

module.exports = app;
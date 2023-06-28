const express = require('express');
const connection = require('../connection');
const router = express.Router();

//get all users
router.get('/getAll', (req, res, next) => {
    sql = `SELECT * FROM user`;
    connection.query(sql, (err, result) => {
        if(!err){
            return res.status(200).json({users: result});
        }else{
            return res.status(500).json(err);
        }
    });
});

//create user
router.post('/add', (req, res, next) => {
    let user = req.body;
    var sql = `INSERT INTO user (name, email, password, telno, address, gender, role) VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.telno}', '${user.address}', '${user.gender}', 'staff')`;
    connection.query(sql, (err, result) => {
        if(!err){
            return res.status(200).json({message: "User added successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

//update user (name, email, address and tellno)
router.patch('/update', (req, res, next) => {
    let user = req.body;
    var sql = "UPDATE user SET name = ?, email = ?, password = ?, telno = ?,address = ? WHERE id = ?";
    connection.query(sql, [user.name, user.email, user.password, user.telno, user.address, user.id], (err, result) => {
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message: "User id not found"});
            }
            return res.status(200).json({message: "User updated successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

//delete user by id
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    var sql = "DELETE FROM user WHERE id = ?";
    connection.query(sql, id, (err, result) => {
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message: "User id not found"});
            }
            return res.status(200).json({message: "User deleted successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

//simple authentication
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    var sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    connection.query(sql, [email, password], (err, result) => {
        if(!err){
            if(result.length == 0){
                return res.status(404).json({message: "Invalid Username or Password!"});
            }
            return res.status(200).json({user: result[0]});
        }else{
            return res.status(500).json(err);
        }
    });
});




module.exports = router;
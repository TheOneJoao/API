const user = require('./../models/user');
const connection = require('./../db/connection');
const query = require('./../db/connection');
const catchAsync = require('../utils/catchAsync')
const ApiError  = require('../utils/ApiError')

// authorizes user to proceed with the request
exports.checkAuth = async (req, res, next) => {
    console.log("authorize aight");
    next()
}

// GET method for user endpoint
exports.getUser = catchAsync(async (req, res, next) => {
    var sql = `SELECT username, countryCode, phoneNumber FROM user WHERE id = ?`;
    const rows = await query(sql, [req.params.id], next);

    if(rows.length === 0)
        return next(new ApiError(`ID ${req.params.id} does not exist!`, 404));

    console.log(rows);
    res.status(200).json(rows);
});

// POST method for user endpoint
exports.createUser = catchAsync(async (req, res, next) => {
    var user    = req.body;
    var sql     = "INSERT INTO user(username, countryCode, phoneNumber, hashedPassword, token) VALUES (?, ?, ?, ?, ?)";
    var data    = [user.username, user.countryCode, user.phoneNumber, user.password, 'sujwj'];
    
    const result = await query(sql, data);

    const affectedRows = result ? result.affectedRows : 0;
    res.status(200).json(user);

    //return affectedRows;
});

// PATCH method for user endpoint
exports.updateUser = catchAsync(async (req, res, next) => {
    var sql = "ALTER user (username, hashedPassword, token, countryCode, phoneNumber) VALUES ('@user13', 'jjSYYSjsusy2y81snsJj', 'uuhsHUSgsy2g72sg2SG', '+351', '912088700')";
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
    });
    
    res.status(200).json( { message : "user updated" , param : req.param.id } );
    console.log("user updated");
});

// DELETE method for user endpoint
exports.deleteUser = catchAsync(async (req, res, next) => {
    var sql = "DELETE user FROM user WHERE id=?";
    const result = await query(sql, [req.params.id]);

    const affectedRows = result ? result.affectedRows : 0;
    res.status(200).send(`${result}`);

    //return affectedRows;
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var errorHandler_1 = require("./utils/errorHandler");
var bodyParser = require("body-parser");
var users_1 = require("./users/users");
var app = express();
app.use(bodyParser.json());
app.get('/api/users', function (req, res) {
    res.json(users_1.users);
});
app.get('/users/:id', function (req, res, next) {
    var userId = req.params.id;
    var user = new users_1.Users();
    var isUserExist = user.getUserById(userId);
    if (!isUserExist) {
        return next(new errorHandler_1.NotFoundException("User with ID ".concat(userId, " not found")));
    }
    res.status(200).json(user);
});
app.use(function (err, req, res, next) {
    var status = err.status || 500;
    var message = err.message || 'Internal server error';
    res.status(status).json({ error: message });
});
app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});

const express = require('express');
const app = express();

// route handlers
const userRouter     = require('./routes/user');
const reactionRouter = require('./routes/reaction');

// error handlers
const ApiError       = require('./utils/ApiError');
const errorHandler   = require('./controllers/error');

// this app.js file is usually for middleware
app.use(express.json());

// middleware for routers
app.use("/api/v1/user", userRouter); 
app.use("/api/v1/reaction", reactionRouter);

// trying to access an invalid URL's
app.all(`*`, (req, res, next) => { 
   next((new Date()) + new ApiError(` Can't find ${req.originalUrl} on this server`, 404));
});

// error handling middleware
app.use(errorHandler);

module.exports = app;
const express = require('express');
const morgan = require('morgan');

const sellerRouter = require('./routers/sellerRouter');
const userRouter = require('./routers/userRouter');
// Making an app
const app = express();

// ---------------------------------------> Middleware <-----------------------------------
// It Parses incoming requests based on JSON Payloads and is based on body-parser
app.use(express.json());
// It is a logger middleware that logs important info on terminal
app.use(morgan('dev'));
// Using a seller Router for the following route
app.use('/api/v1/sellers', sellerRouter);
app.use('/api/v1/users', userRouter);
// Exporting the app which will be used in index.js
module.exports = app;

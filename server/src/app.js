const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

const tokenRouter = require('./routes/tokenRouter')
const authRouter = require('./routes/authRouter')
const recipeRouter = require('./routes/recipeRouter')

app.use(cookieParser());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/recipes', recipeRouter);

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const tokenRouter = require('./routes/tokenRouter');
const authRouter = require('./routes/authRouter');
const recipeRouter = require('./routes/recipeRouter');
const favoriteRouter = require('./routes/favoriteRouter');

app.use(cookieParser());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/favorites', favoriteRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/api/v1', api);

Object.values(middlewares).forEach(middleware => {
    app.use(middleware);
});

module.exports = app;

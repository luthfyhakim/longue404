const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const morgan = require('morgan');
const cors = require('cors');

const app = express(); // initial

// DB dan middleware
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(router); // hrs di bawah
app.use(errorHandler); // stlh semua routing baru error nya

module.exports = app;
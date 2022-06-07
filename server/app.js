const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/index');

const app = express(); // initial

// DB dan middleware
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router); // hrs di bawah

module.exports = app;
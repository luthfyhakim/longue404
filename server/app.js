const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const morgan = require('morgan');
const cors = require('cors');

const app = express(); // initial

// socket.io (realtime chat)
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected !");

  socket.on("send chat", (payload) => {
    console.log("chat", payload);

    socket.emit("send chat", { ...payload, sender: true });
    socket.broadcast.emit("send chat", { ...payload, sender: false });
  });
});

// DB dan middleware
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(router); // hrs di bawah
app.use(errorHandler); // stlh semua routing baru error nya

module.exports = server;
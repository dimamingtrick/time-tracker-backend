const express = require("express");
const { Server: httpServer } = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIO = require("socket.io");
const { jwtMiddleware } = require("./middlewares");
require("dotenv").config();

const app = express();
const server = httpServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/time-tracker";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * API routes
 */
app.use(require("./routes/auth.routes"));
app.use("/workout", jwtMiddleware, require("./routes/tracker.routes"));

app.get("/", (req, res) => {
  res.send("YEAH BOY");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    server.listen(PORT, () => {
      console.log(`Server is working on port ${PORT}`);

      io.on("connection", socket => {
        app.set("socket", socket);
      });
    });
  } catch (err) {
    console.log("Start error: ", err.message);
  }
}

start();


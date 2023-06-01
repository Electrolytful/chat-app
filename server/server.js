// imports
require("dotenv").config();
const express = require("express");
const {chats} = require("./data/DUMMY_DATA.js");

// globals
const PORT = process.env.PORT || 5000;

// server config
const app = express();

// server routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Chat API" });
});

app.get("/api/chats", (req, res) => {
    res.json(chats);
})

app.get("/api/chats/:id", (req, res) => {
    const chat = chats.find(chat => chat._id === req.params.id);
    res.json(chat);
})

// running server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

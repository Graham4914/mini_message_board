const express = require("express");
const router = express.Router();

// Sample messages array
const messages = [
  { text: "Hello, world!", user: "Alice", added: new Date() },
  { text: "I love Express!", user: "Bob", added: new Date() }
];

// Homepage route ("/") - Show messages
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});

// New message form route ("/new")
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Handle new message submission ("/new")
router.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;

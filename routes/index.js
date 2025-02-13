const express = require("express");
const router = express.Router();
const db = require("../db/queries");

// Fetch and display messages from PostgreSQL
router.get("/", async (req, res) => {
    try {
        const messages = await db.getAllMessages();
        res.render("index", { title: "Mini Message Board", messages });
    } catch (err) {
        console.error("❌ Error fetching messages:", err);
        res.status(500).send("Server error");
    }
});

// Show form to add a message
router.get("/new", (req, res) => {
    res.render("form", { title: "New Message" });
});

router.get("/create", (req, res) => {
  res.redirect("/new");
});


// Add new message to PostgreSQL
router.post("/new", async (req, res) => {
    const { messageText, messageUser } = req.body;

    if (!messageText || !messageUser) {
        return res.status(400).send("User and message text are required");
    }

    try {
        await db.insertMessage(messageUser, messageText);
        res.redirect("/");
    } catch (err) {
        console.error("❌ Error inserting message:", err);
        res.status(500).send("Server error");
    }
});

module.exports = router;

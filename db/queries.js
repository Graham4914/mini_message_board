const pool = require("./pool");

// Fetch all messages
async function getAllMessages() {
    const { rows } = await pool.query("SELECT id, username, message, added FROM messages ORDER BY added DESC");
    return rows;
  }
// Insert a new message
async function insertMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message) VALUES ($1, $2)",
    [username, message]
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};

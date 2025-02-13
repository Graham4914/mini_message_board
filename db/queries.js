const pool = require("./pool");

// Fetch all messages
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
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

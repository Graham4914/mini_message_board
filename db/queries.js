const pool = require("./pool");

// Fetch all messages
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return rows;
}

// Insert a new message
async function insertMessage(username, text) {
  await pool.query(
    "INSERT INTO messages (username, text) VALUES ($1, $2)",
    [username, text]
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};

const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "odin_user",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "mini_message_board_db",
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;

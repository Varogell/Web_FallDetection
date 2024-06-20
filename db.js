// Import dotenv and configure it to read .env file
require('dotenv').config();

// Accessing environment variables
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

// Example usage
async function getDataFromDatabase() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sensor_data LIMIT 10');
    return result.rows;
  } finally {
    client.release();
  }
}

// Export your pool or functions for use in your application
module.exports = { pool, getDataFromDatabase };

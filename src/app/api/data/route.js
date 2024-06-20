// pages/api/test.js
import pool from '../../../../db';

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM sensor_data LIMIT 10'); // Adjust query as needed
    client.release();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Database connection error', error);
    res.status(500).json({ success: false, message: 'Database connection error' });
  }
}
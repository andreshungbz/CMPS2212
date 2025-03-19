import { query } from '../config/db.js';

export const getAllSignups = async () => {
  try {
    const result = await query('SELECT username, email FROM signups');
    return result.rows;
  } catch (error) {
    console.error('Errory fetching signups:', error);
    throw error;
  }
};

export const addSignup = async (username, email) => {
  try {
    const result = await query(
      'INSERT INTO signups (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error adding signups:', error);
    throw error;
  }
};

import { query } from '../config/db.js';

export const retrieveMessages = async () => {
  try {
    const result = await query('SELECT * FROM message');
    return result.rows;
  } catch (error) {
    console.error('Errory fetching messages:', error);
    throw error;
  }
};

export const addMessage = async (name, message) => {
  try {
    const result = await query(
      'INSERT INTO message (name, message) VALUES ($1, $2) RETURNING *',
      [name, message]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error adding message:', error);
    throw error;
  }
};

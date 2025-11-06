const pool = require("../config/db")


const UserModel = {
async createUser({ name, email, password, phone }) {
const sql = 'INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)';
const [result] = await pool.execute(sql, [name, email, password, phone]);
return { id: result.insertId, name, email };
},


async findByEmail(email) {
const sql = 'SELECT id, username, email, password, created_at FROM users WHERE email = ? LIMIT 1';
const [rows] = await pool.execute(sql, [email]);
return rows[0] || null;
},


async findById(id) {
const sql = 'SELECT id, username, email, created_at FROM users WHERE id = ? LIMIT 1';
const [rows] = await pool.execute(sql, [id]);
return rows[0] || null;
},

async contactUs({ name, email, phone, message }) {
    const sql = `
      INSERT INTO contacts (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;
    try {
      const [result] = await pool.execute(sql, [name, email, phone, message]);
      return result;
    } catch (error) {
      console.error("Database query failed:", error);
      throw error;
    }
  },
};


module.exports = UserModel;
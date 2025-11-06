const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const pool = require('./config/db');
const cors = require('cors');

dotenv.config();
const app = express();

// ✅ Enable CORS *before* defining routes
app.use(cors({
  origin: '*', // your React app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

// simple health route
app.get('/', (req, res) => res.send('Node MVC Auth API is running'));

// ✅ Routes should come *after* middlewares
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

// ensure DB connection before starting server
(async function start() {
  try {
    await pool.getConnection().then(conn => conn.release());
    console.log('✅ Connected to MySQL Database');
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
  } catch (err) {
    console.error('❌ Unable to connect to DB:', err.message);
    process.exit(1);
  }
})();

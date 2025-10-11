const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const pool = require('./config/db');


dotenv.config();
const app = express();
app.use(express.json());


// simple health route
app.get('/', (req, res) => res.send('Node MVC Auth API is running'));


app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 3000;


// ensure DB connection before starting server
(async function start() {
try {
await pool.getConnection().then(conn => conn.release());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
} catch (err) {
console.error('Unable to connect to DB, exiting...', err);
process.exit(1);
}
})();
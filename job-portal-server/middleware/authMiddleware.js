const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';


module.exports = function (req, res, next) {
const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith('Bearer ')) {
return res.status(401).json({ message: 'Authorization token missing' });
}


const token = authHeader.split(' ')[1];
try {
const payload = jwt.verify(token, JWT_SECRET);
req.userId = payload.id;
req.userEmail = payload.email;
next();
} catch (err) {
return res.status(401).json({ message: 'Invalid or expired token' });
}
};
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const tokenHeader = req.headers['authorization'];

  if (!tokenHeader) {
    return res.status(401).json({ error: 'Token krävs i Authorization-headern' });
  }

  const token = tokenHeader.split(' ')[1]; // Ta bort "Bearer" och behåll token-delen

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Spara info om användaren om du vill
    next();
  } catch (err) {
    res.status(403).json({ error: 'Ogiltig token' });
  }
};
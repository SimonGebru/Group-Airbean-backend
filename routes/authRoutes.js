const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  // Här simulerar vi att någon loggar in
  const user = {
    id: '123',
    name: 'Admin'
  };

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
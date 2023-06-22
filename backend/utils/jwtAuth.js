const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const generateToken = (payload, time) => jwt.sign(payload, process.env.NODE_ENV !== 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: time });

const checkToken = (token) => jwt.verify(token, NODE_ENV !== 'production' ? JWT_SECRET : 'dev-secret');

module.exports = {
  generateToken,
  checkToken,
};

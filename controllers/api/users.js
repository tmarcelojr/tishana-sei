const User = require("../../models/user");
const jwt = require('jsonwebtoken')

module.exports = {
  create
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user)
    // return token back to client
    res.json(token)
  } catch (err) {
    res.status(400).json(err);
  }
}

// HELPER FUNCTION
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}
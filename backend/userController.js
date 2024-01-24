
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Remove the 'User' directory

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
  res.json({ token });
};
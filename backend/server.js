require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userController = require('./userController');
const secretKey = process.env.SECRET_KEY || '1234'
const User = require('./models/user'); // Remove the 'User' directory


app.use(cors());
app.use(express.json());
app.options('/register', cors());
app.post('/register', cors(), userController.register);
app.options('/login', cors());
app.post('/login', cors(), userController.login);

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1]
  const decoded = jwt.verify(token, secretKey)
  if (!decoded) {
    return res.status(401).json({ error: 'Please authenticate' })
  }
  req.user = decoded
  next()
}

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/app/src/main.jsx'))
})

app.get('/protected', authenticate, (req, res) => {
  res.send('This is a protected route')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

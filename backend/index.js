const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes (to be implemented)
app.get('/', (req, res) => {
  res.send('Learnr backend API running!');
});

// Example: app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log('Server running on port', PORT));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
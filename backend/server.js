const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
require('dotenv').config();
const app = express();
const PORT = 5000;
const corsOptions = {
  origin: 'https://intern-donation-portal.vercel.app', // your deployed frontend
  methods: ['GET', 'POST'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes


app.use('/api', authRoutes);
app.use('/api',dashboardRoutes);
app.get('/', (req, res) => {
res.send('Intern Portal backend is running successfully');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhumireddyvarshitha944:lWKSqhQbElIoMV8C@cluster0.ka1ez1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api', authRoutes);
app.use('/api',dashboardRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//lWKSqhQbElIoMV8C
//mongodb+srv://bhumireddyvarshitha944:lWKSqhQbElIoMV8C@cluster0.ka1ez1z.mongodb.net/
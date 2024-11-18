const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();
const app = express();

app.use(cors({
    origin: "http://localhost:3000"  // Only allow requests from localhost:3000
  }));
app.use(express.json()); // For parsing JSON bodies

app.use('/api/auth', authRoutes); // Use auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

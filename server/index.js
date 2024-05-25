const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);});

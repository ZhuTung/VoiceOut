const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://db:27017/myapp';

const r_Accounts = require('./routes/r_Accounts');
const r_Thoughts = require('./routes/r_Thoughts');

// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB:", MONGODB_URI))
    .catch((err) => console.log("MongoDB connection failed", err));

// Set Up Middleware
app.use(express.json());
app.use(cors());
app.use("/accounts", r_Accounts);
app.use("/thoughts", r_Thoughts);

app.get('/', (req, res) => {
    res.status(200).send("This is the VoiceOut Backend created by Zhu Tung");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://db:27017/myapp';

const r_Accounts = require('./routes/r_Accounts');

// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection failed", err));

// Set Up Middleware
app.use(express.json());
app.use("/accounts", r_Accounts);

app.get('/', (req, res) => {
    res.status(200).send("This is the VoiceOut Backend created by Zhu Tung");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
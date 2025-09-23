const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send('Hello client!');
})

app.use('/api/auth',authRoutes);
app.use('/api/blogs',blogRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connected to DB!');
        app.listen(3000);
    })
    .catch((err)=>{
        console.error('Failed to connect to DB!',err);
    });
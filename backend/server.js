const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({path: './PORT.env'});
const mongoose = require('mongoose');
const url = "mongodb+srv://Tristan:tristan@mern-cluster.rxfy8oz.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
const booksRoutes = require('./routes/books');

app.get('/', (req,res) => {
    return res.json({hello: "world"});
})

//route for saving a book
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/books', booksRoutes);

mongoose.connect(url).then(()=>{
    console.log('Connected to Database');
    app.listen(process.env.PORT, () => {
        console.log('app is running on localhost ' + process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})


const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { default: connectDB } = require('./config/mongoos');
const cors = require('cors');
const app = express();
const port = 3000;
connectDB()

// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello fahima!');
});


app.listen(port, () => {
    console.log("app is running port: ", port)
})
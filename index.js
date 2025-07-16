import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/mongoos.js';
import cashRoutes from './routes/Cash.routes.js';
import cors from 'cors';

// Initialize express app
const app = express();
const port = 3000;
connectDB()

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello fahima!');
});

// import routes
app.use('/api', cashRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


app.listen(port, () => {
    console.log("app is running port: ", port)
})
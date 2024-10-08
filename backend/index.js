import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin: true,
    credentials: true
}

// Database connection
/*mongoose.set("strictQuery", false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB database connected')

    } catch (err) {
        console.log("MongoDb database connection failed")
    }
}*/
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.error("MongoDB database connection failed:", err);
        throw err; // Rethrow the error to handle it in the listen call
    }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

/*app.listen(port, () => {
    connect();
    console.log('server listening on port', port);
});*/
app.listen(port, async () => {
    try {
        await connect(); // Await the connect function
        console.log('Server listening on port', port);
    } catch (err) {
        console.error("Failed to start server due to database connection error:", err);
        process.exit(1); // Exit the process if connection fails
    }
});
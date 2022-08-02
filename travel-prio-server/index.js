import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import UserRoute from './Routes/User.Route.js'

dotenv.config()
const PORT = process.env.PORT


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(PORT, () => console.log(`app is running at localhost ${PORT}`)))
    .catch((error) => console.log(error))

//routes
const app = express();


//missleware
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//uses of route
app.use('/user', UserRoute)

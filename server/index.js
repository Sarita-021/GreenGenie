const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const dotenv = require('dotenv')
const { connect } = require('mongoose')
const connectDB = require('./config/db')
const userRoutes=require("./routes/userRoutes")

//env config
dotenv.config();

const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"));
app.use(userRoutes)
//mongodb connection 
connectDB();

app.get("/", (req, res) => {
    res.send("Hello from server!");
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('server Running on ' + process.env.DEV_MODE + ' mode port no. ' + PORT)
})

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//env config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/item", itemRoutes);
app.use("/api/v1/blog", blogRoutes);

app.get("/", (req, res) => {
    res.send("Hello from server!");
});

app.get("*", (req, res) => {
    res.send("invalid request");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
        "server Running on " + process.env.DEV_MODE + " mode port no. " + PORT
    );
});

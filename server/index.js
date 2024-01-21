const express = require("express");
const morgan = require("morgan");
const connectDB=require("./dbconfig/conn")
require("dotenv").config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3001;
connectDB();
const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
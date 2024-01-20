const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const express = require("express");
const connectDB = require("./config/db.js");
const app = express();

connectDB();

//Init Middleware
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

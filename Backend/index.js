import express, { json } from "express";
import connectDB from "./config/db.js";
const app = express();
import router from "./Routes/routes.js";

connectDB();

//Init Middleware
app.use(json());


app.use('/api',router) ;


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

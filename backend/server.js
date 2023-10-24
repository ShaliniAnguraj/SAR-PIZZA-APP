const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const authRoute = require("./Routes/AuthRoute");
const connectDB = require("./config/config.js")

app.use(
    cors({
      origin: ["http://localhost:8000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  
  app.use(express.json());
  
  app.use("/", authRoute);

  const port = process.env.PORT || 5000;
connectDB().then(() => {
    app.get("/", (req, res) => {
        res.send("<h1>Hello From Node Server vai nodemon</h1>");
      });
    try {
        app.listen(port, () => {
            console.log(`Server Running on ${process.env.NODE_ENV} on port no ${process.env.PORT}`.bgGreen.blue);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
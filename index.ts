const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());


const server = app.listen("8080", () => {
    console.log("Server Running on Port 8080...");
});


  app.use('/api/v1', require('./routes/userroute'));




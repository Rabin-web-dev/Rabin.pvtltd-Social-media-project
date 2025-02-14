require("dotenv").config();
const connectMongoDB = require("./config/Database.js");
const express = require("express");


const app = express();

//Middleware
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Server is running!");
});

connectMongoDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is successfully running on port ${PORT}`));

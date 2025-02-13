const connectMongoDB = require(" ./config/database.js ");
const express = require("express");

const app = express();

connectMongoDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is successfully running on port ${PORT}`));


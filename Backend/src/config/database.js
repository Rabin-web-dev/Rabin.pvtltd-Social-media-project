const mongoose = require("mongoose");

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MondoDB_URL, {
            useNewUrlParser : true ,
            useUnifiedTopology : true ,
        });
        console.log(" MongoDB Connected successfully ");
    } catch (error) {
        console.log(" MongoDB Connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectMongoDB;
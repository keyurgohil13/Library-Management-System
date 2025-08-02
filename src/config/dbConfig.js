const mongoose  = require("mongoose");

const dbConnection = ()=>{
    console.log(process.env.MONGO_URL)
        mongoose.connect(process.env.MONGO_URL)
        .then(() =>console.log('database is connected...'))
        .catch((err) =>console.log('Error: ', err));
}

module.exports = dbConnection();
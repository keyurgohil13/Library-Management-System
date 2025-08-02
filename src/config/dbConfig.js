const mongoose  = require("mongoose");

const dbConnection = ()=>{
        mongoose.connect(process.env.MONGO_URL)
        .then(() =>console.log('database is connected...'))
        .catch((err) =>console.log('Error: ', err));
}

module.exports = dbConnection();
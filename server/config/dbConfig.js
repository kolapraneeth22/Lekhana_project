const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("MongoDB connected successfully")
})
db.on("error", (err)=>{
    console.log("MongoDB connection Failed: ", err)
})

module.exports = db;

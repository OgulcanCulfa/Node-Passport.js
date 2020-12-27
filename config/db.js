const mongoose = require('mongoose');

const connection = mongoose.connect('',{
    dbName: "passport",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB is on..."))
.catch(err => console.log(err))

module.exports = connection;

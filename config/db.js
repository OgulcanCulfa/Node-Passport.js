const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://Ogulcan:fahrireis46@example.i3mn4.mongodb.net/test',{
    dbName: "passport",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB is on..."))
.catch(err => console.log(err));

module.exports = connection;

const mongoose = require('mongoose');



const d = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const tr = d.toLocaleString('tr-TR',options);

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
})


const User = mongoose.model('User', UserSchema);

module.exports = User;
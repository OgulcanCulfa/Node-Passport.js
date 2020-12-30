// import express
const express = require('express');
// import view
const expressLayouts = require('express-ejs-layouts');
// import flash
const flash = require('connect-flash');
// import session
const session = require('express-session');
//import passport
const passport = require('passport');
//import routes
const index = require('./routes/index');
const users = require('./routes/users');
// import db
const db = require('./config/db');
// Passport config
require('./config/passport')(passport);



// instantiate express

const app = express();

// instantiate ejs

app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser

app.use(express.urlencoded({extended: false}));

// Express Session

app.use(session({
    secret: 'top secret',
    resave: true,
    saveUninitialized: true

}));

// Passport

app.use(passport.initialize());
app.use(passport.session());

// Connect flash

app.use(flash());

// Global variables

app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})


// routes

app.use('/', index);
app.use('/users', users);



// Server setups

const PORT = process.env.PORT;

app.listen(PORT,() => {console.log(`Server is listening on PORT: ${PORT}`)});
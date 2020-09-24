const express = require("express");
const mysql = require("mysql");
const path = require("path");
const dotenv = require('dotenv');
var cons = require('consolidate');
const bodyparser = require('body-parser');
const session = require('express-session');
dotenv.config({ path: './.env' })
const flash = require('connect-flash');
const passport = require("passport");
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const http = require('http');
const port = 3000;




var AWS = require('aws-sdk');
var uuid = require('uuid');

AWS.config.update({
    region: 'eu-east-1',
    accessKeyId: ''
})

require('./config/passport')(passport);

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const publicDir = path.join(__dirname, './public');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicDir));

app.use(methodOverride('_method'));

app.use(bodyparser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.alert = req.flash('alert');
    res.locals.teacher = req.flash('teacher');
    res.locals.teacher = req.flash('teacherClass1');
    res.locals.teacher = req.flash('teacherClass2');
    res.locals.teacher = req.flash('teacherClass3');
    res.locals.teacher = req.flash('teacherClass4');
    res.locals.teacher = req.flash('teacherClass5');
    res.locals.teacher = req.flash('teacherClass6');
    res.locals.teacher = req.flash('teacherClass7');
    res.locals.teacher = req.flash('teacherClass8');
    res.locals.teacher = req.flash('teacherClass9');
    res.locals.teacher = req.flash('teacherClass10');
    next();
});

//app.use(expressLayouts);
app.set('view engine', 'ejs');

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("mysql connected...");
    }
})

app.use('/', require('./routes/pages'));

app.use('/auth', require('./routes/auth'));


app.use(passport.initialize());
app.use(passport.session());

app.listen(5001, () => {
    console.log("server is starting");
})

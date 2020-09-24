const express = require('express');
const authController = require('../controllers/auth');
const { response } = require('express');
const router = express.Router();
const Datastore = require("nedb");
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const methodOverride = require('method-override');
const Grid = require('gridfs-stream');
const mongoUriUpload = 'mongodb+srv://radeam:jkd218100@cluster0.j7zby.gcp.mongodb.net/dbfiles?retryWrites=true&w=majority'

const User = require('../models/User');

const { ensureAuthenticated } = require('./authentication');
const cons = require('consolidate');
const { json } = require('body-parser');

const database = new Datastore('messages.db');
database.loadDatabase();

const db = require('../config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connect...'))
    .catch(err => console.log(err));

const conn = mongoose.createConnection(mongoUriUpload, { useUnifiedTopology: true, useNewUrlParser: true });

let gfs;

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

router.post('/loginStudent', authController.loginStudent)
router.post('/register', authController.register)

router.post('/register1', (req, res,next) => {
    const { name, gender, email, role, class1, password, password2 } = req.body;

    let errors = [];
    const subjects = [{subjects: ""}];

    if (!name || !email || !role || !gender || !password || !password2) {
        errors.push({ msg: "please fill all the fields" });
    }
    if (password !== password2) {
        errors.push({ msg: "password dont match" });
    }
    if (password.length < 6) {
        errors.push({ msg: "password too short" });
    }
    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            gender,
            email,
            role,
            subjects,
            class1,
            password,
            password2
        });
    }
    else {
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    errors.push({ msg: 'Email already registered' });
                    res.render('register', {
                        errors,
                        name,
                        gender,
                        email,
                        role,
                        subjects,
                        class1,
                        password,
                        password2
                    });
                }
                else {
                    const newUser = new User({
                        name,
                        gender,
                        email,
                        role,
                        subjects,
                        class1,
                        password,
                        password2
                    });
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'User registered');
                                if(role === "teacher"){
                                    passport.authenticate('passport-local', {
                                        successRedirect: '/registerTeacher',
                                        failureRedirect: '/loginStudent',
                                        failureFlash: true
                                    })(req, res, next);
                                }
                                else{
                                    res.redirect('/loginStudent');
                                }
                            })
                            .catch(err => console.log(err));
                    }));
                }
            });
    }

});


router.post('/subject', (req, res) => {
    console.log(req.body);
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json(data);
})

router.post('/addSubjects', ensureAuthenticated, (req, res) => {
    console.log(req.body.subjects);
    User.updateOne({ email: req.user.email }, {
        $push: { subjects: {subject: req.body.subjects} }

    }).catch(function(error,affected,resp){
        console.log(error);
    })
    res.render('registerTeacher', {
        alert: 'subject added'
    })

})


router.get('/subject', (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            res.end();
            return;
        }
        res.json(data);
    })
})
router.post('/asgn', (req, res) => {
    console.log(req.body);
    const data = req.body;
    const timestampAsgn = Date.now();
    data.timestampAsgn = timestampAsgn;
    database.insert(data);
    res.json(data);
})
router.get('/asgn', (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            res.end();
            return;
        }
        res.json(data);
    })
})



router.post('/upload', ensureAuthenticated, (req, res) => {

    const data = req.body.y;

    const storage = new GridFsStorage({
        url: mongoUriUpload,
        file: (req, file) => {
            return new Promise((resolve, reject) => {
                crypto.randomBytes(16, (err, buf) => {
                    if (err) {
                        return reject(err);
                    }
                    const filename = req.user.name + '_' + req.user.class1 + path.extname(file.originalname);
                    const fileInfo = {
                        filename: filename,
                        bucketName: 'uploads'
                    };
                    resolve(fileInfo);
                });
            });
        }
    });

    const upload = multer({
        storage: storage,
        limits: { fileSize: 1000000 },
    }).single('filename')


    upload(req, res, (err) => {
        if (err) {
            return res.render('assignments', {
                alert: 'File too big or you need to select the right upload button'
            })
        } else {
            if (req.file != undefined) {
                res.render('assignments', {
                    alert: 'file successfully uploaded'
                })
            }
            if (req.file == undefined) {

                return res.render('assignments', {
                    alert: 'You need to select a file'
                })
            }
        }
    })

    if (req.body.y === req.user.fileupload) {
        res.render('assignments', {
            alert: 'You have already uploaded a file'
        })

    } else {

    }

})


router.post('/login1', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/classes',
        failureRedirect: '/loginStudent',
        failureFlash: true
    })(req, res, next);
})



router.get('/redirect', (req, res, next) => {
    return res.render('register');
})

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/loginStudent');
})



module.exports = router;
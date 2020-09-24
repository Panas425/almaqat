const mysql = require("mysql");
const { json, query, response } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser')
const express = require("express");
const cons = require("consolidate");
const Datastore = require("nedb");
const app = express();



const router = express.Router();

const bool = false;



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.register = async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT username FROM users WHERE username = ?', [username], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'username already taken'
            })
        }

        let hashedpasword = await bcrypt.hash(password, 8);
        console.log(hashedpasword);

        db.query('INSERT INTO users SET ?', { username: username, password: hashedpasword }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User Registered'
                })
            }
        })

    })
}


exports.loginStudent = async (req, res) => {
    console.log(req.body);

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).render('loginStudent', {
                message: 'insert username or password'
            })
        }

        db.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
            console.log(results[0].password);
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(400).render('loginStudent', {
                    message: 'incorrect'
                })
            }
            else {
                return res.redirect('/logged-in/class_4-5');
            }
        })

    } catch (error) {
        console.log(error);
    }

}

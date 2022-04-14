const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log(`Connected to the courses_db database.`)
    );

    db.connect((err) => {
        if (err) {
            throw err;
        }
    })

    module.exports = db;
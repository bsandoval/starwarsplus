const mongoose = require('mongoose');
require('dotenv').config()

exports.initDb = () => {
    // Establish connection to DB
    console.log(`Connecting to ${process.env.DB_URL}`)
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Error...', err);
        process.exit();
    });
};

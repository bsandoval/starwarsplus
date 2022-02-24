const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require("./mongodb");
const users = require('./src/routes/user.routes.js');

mongodb.initDb();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// parses the request into a json format
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Server is running :D" });
});

let PORT = 8080

app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
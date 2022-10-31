const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

const route = require('./route/index.js');
const db = require('./config/db.js');
const credentials = require('./credentials');

db.connect();

app.use(cookieParser())
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
route(app)
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})
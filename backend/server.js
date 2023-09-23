const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const express = require('express')
const session = require('express-session')


// const {
//     pathToEnvFile,
// } = require('src/mongoDB');
// const path = require("path");

dotenv.config({path: path.resolve(__dirname, '../.env')});

const app = express()


app.use(express.json())
app.use(cors())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))


const port = 3000


app.post('/register', (req, res) => {
    // const {username, password} = req.body
    console.log(req.body?.data)
    console.log(req.body)
    return res.status(200).json({
        message: 'We did it',
        'request method': req.method,
        'request url': req.url,
        'body': req.body,
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
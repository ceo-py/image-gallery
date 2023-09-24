const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const express = require('express');
var jwt = require('jsonwebtoken');
const {addUserToDB} = require("./src/mongoDB");
dotenv.config({path: path.resolve(__dirname, '../.env')});


const app = express()

app.use(express.json())


app.use(cors())
const port = 3000






app.post('/register', async (req, res) => {
    const {username, password} = req.body
    console.log('Cookie', req.cookie)
    console.log('From /register', req.body)
    await addUserToDB('Users', {username, password}, res)
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
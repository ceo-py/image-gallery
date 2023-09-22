require('dotenv').config()
const cors = require('cors');
const express = require('express')
const jwt = require('jsonwebtoken')




// const {

//     addUserToDB,
// } = require('src/mongoDB');
const app = express()

app.use(express.json())
app.use(cors())


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
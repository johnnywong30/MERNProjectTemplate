const express = require('express')
const app = express.Router();

app.post('/test', (req, res) => {
    console.log("Hello world!")
    res.json({data: [1, 2, 3]})
})

module.exports = app
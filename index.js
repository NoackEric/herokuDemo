// import express
const express = require('express')
const app = express()
const port = 7000
app.use(express.static('public'));
app.set('views', './views')

// import ejs
const ejs = require('ejs');

// import axios
const axios = require('axios');


app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})
app.get('/about', (req, res) => {
    res.render('pages/about.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
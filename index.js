// import express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


// import ejs
const ejs = require('ejs');

// import axios
const axios = require('axios');


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('/index.ejs')
})
app.get('/about', (req, res) => {
    res.render('/about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('/contact.ejs')
})


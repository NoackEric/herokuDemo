// import express
const express = require('express')
const app = express()
const port = process.env.PORT || 3010
app.set('views', './views');
// app.set('view engine', 'ejs');
app.use(express.static('public'));
// gotenv
require('dotenv').config()
// import ejs
const ejs = require('ejs');

// import axios
const axios = require('axios');


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('index.ejs', { name: process.env.USERNAME })
})
app.get('/about', (req, res) => {
    res.render('about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
app.get('/news', (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`)
        .then(function (response) {
            // handle success
            console.log(response);
            res.render('news.ejs', { articles: response.data.articles })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


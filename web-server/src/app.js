const path = require('path');
const express = require('express');

const assets = path.join(__dirname, '../public');
const app = express();

app.set('view engine','hbs');
app.use(express.static(assets, { extensions: ['html'] }));

app.get('/', (req, res) => {
    res.render('index',{
        title: 'Home Page',
        message: 'Welcome to my first express.js based web application!',
        author: 'Rishabh Goyal'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Page',
        message: 'Welcome! This is where you can learn more about us.',
        author: 'Rishabh Goyal'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help Page',
        message: 'Looking for some help? You have come to the right place.',
        author: 'Rishabh Goyal'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'The weather has been obnoxious lately.',
        location: 'Patiala'
    });
})

app.listen(3000, () => {
    console.log('Server running');
})
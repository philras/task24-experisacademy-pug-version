const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const pug = require('pug');
const port = 8080;

let rawData = fs.readFileSync('Json/data.json');
const data = JSON.parse(rawData);

app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.get('/data', (req, res) => res.send(data));

app.get('/', (req, res) => {
    res.render('main', {data: data});
});

app.listen(process.env.PORT || 8080)
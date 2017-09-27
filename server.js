const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

// const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/personalWebsite');

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'client')));

app.use(function(req, res, next) {
  console.log('Serving ' + req.method + 'for ' + req.url);
  next();
});

// app.get('/', ()=>{

// })

app.use('/style.css', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'style.css'));
})

app.listen(8000, ()=>{
  console.log('Listening on port 8000')
})
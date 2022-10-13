//expess js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const DB_URI = 'mongodb://rs0:27018,rs1:27019,rs2:27020,rs3:27021,rs4:27022/test';
mongoose.connect("mongodb://localhost/nodekb1", {useNewUrlParser: true});
let db = mongoose.connection;



//check connection
db.once('open', function(){
console.log('Connected to server');
});
  db.on('error', function(error){
    console.log('Your error', error);
  });








//init app
const app = express();




//pug
//l'oad view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home rotue
app.get('/', function(req, res){
  let articles =[
    {
    id: 1,
    title: 'article 1',
    author: 'Axeekz',
    body: 'This is article 1'
  },
  {
  id: 2,
  title: 'article 2',
  author: 'Axeekz',
  body: 'This is article 2'
},
{
id: 3,
title: 'article 3',
author: 'Axeekz',
body: 'This is article 3'
}
  ]
  res.render('index', {
    title: 'Hello there',
    articles: articles
  });
});

// how to add route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title:'Add article'
  });
});











app.listen(3001, function(){
  console.log('Server started on port 3001....');
});

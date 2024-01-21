const express = require('express');
const app = express();
const articleRouter = require('./routes/articles') // importing articles.js file
const port = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    // res.send('This is my first app');
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
  });
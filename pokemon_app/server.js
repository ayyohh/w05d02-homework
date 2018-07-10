const express = require('express');
const app = express();
const poke = require('./models/pokemon.js');


app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon home page');
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs');
});














app.listen(3000, () => {
  console.log('i am listening.... and watching......');
})

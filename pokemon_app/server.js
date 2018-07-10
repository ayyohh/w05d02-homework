const express = require('express');
const app = express();
const poke = require('./models/pokemon.js');


app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon home page');
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokes: poke
  });
});

app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id);
});












app.listen(3000, () => {
  console.log('i am listening.... and watching......');
})

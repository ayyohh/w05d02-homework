const express = require('express');
const app = express();
const poke = require('./models/pokemon.js');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon home page');
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokes: poke
  });
});

app.get('/pokemon/:id', (req, res) => {
  console.log(poke[req.params.id]);
  res.render('show.ejs', {

    pokes: poke[req.params.id]
  });
});











app.listen(3000, () => {
  console.log('i am listening.... and watching......');
})

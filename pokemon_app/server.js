const express = require('express');
const app = express();
const Poke = require('./models/pokemon.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static('public'));


//Get get
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon home page');
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokes: Poke.all()
  });
});

app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs', {})
});

app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokes: Poke.findOne(req.params.id)
  });
});

//Edit
app.get('/pokemon/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokes: Poke.findOne(req.params.id)
  });
});

//Create
app.post('/pokemon', (req, res) => {
  Poke.create(req.body);
  res.redirect('/pokemon');
});

//Update
app.post('/pokemon/:id', (req, res) => {
  Poke.update(req.params.id, req.body);
  	res.redirect("/pokemon/" + req.params.id);
});

//DESTROY
app.delete('/pokemon/:id', (req, res) => {
  Poke.delete(req.params.id);
  res.redirect('/pokemon');
});










app.listen(3000, () => {
  console.log('i am listening.... and watching......');
})

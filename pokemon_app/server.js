const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon home page');
})















app.listen(3000, () => {
  console.log('i am listening.... and watching......');
})

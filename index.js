const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Willkommen beim Version Kontrolle Tool!');
});

app.listen(port, () => {
  console.log(`Beispiel-App hört auf http://localhost:${port}`);
});
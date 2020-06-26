console.log('starting');

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) =>{
  res.send('string for the primary endpoint');
});

app.get('/sum', (req, res) => {
  let a = req.query.a;
  let b = req.query.b;
  let aNum = Number(a);
  let bNum = Number(b);
  let sum = aNum + bNum;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.get('/cipher', (req, res) => {
  let text = req.query.text.toLowerCase();
  console.log(text);
  let shift = Number(req.query.shift);
  let letterArray = text.split('');
  let results = letterArray.map((letter) =>{
    let base = 97;
    let code = letter.charCodeAt(0);
    code = code - base;
    code = (code + shift) % 26;
    code = code + base;
    console.log(code);
    return String.fromCharCode(code);
  });

  res.send(results.join(''));
});









app.listen(7000, () => {
  console.log('Express server is listening on port 7000!');
});
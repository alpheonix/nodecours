var express = require('express');
var app = express();
const port = 3000;

app.get('/hello', (req, res) => {    
    res.send('hello world');
  });

  app.listen(port,() => {
      console.log("looooooooo");
      
  }
  )

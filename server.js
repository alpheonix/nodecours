var express = require('express');
var app = express();
const port = 3000;

app.get('/hello', (req, res) => {    
    res.send('hello world');
  });

  app.listen(process.env.PORT || port,() => {
      console.log("looooooooo");
      
  }
  )

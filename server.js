var express = require('express');
var app = express();
const port = 3000;
console.log("Hello World");

app.get('/hello', (req, res) => {    
    res.send('Hello World!');
  });

  app.use(express.json());

  app.post('/chat', (req, res) => {
    const request = req.body;
      if(request.msg == "ville"){
        res.send('Nous sommes à Paris');
      }else if(request.msg == "meteo"){
        res.send('Il fait beau');
      }else{
          res.send("nop")
      }
  });

  app.listen(process.env.PORT || port,() => {
      console.log("looooooooo");
      
  }
  )

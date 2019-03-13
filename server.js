var express = require('express');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
  // Connection URL
  const url = process.env.MONGODB_URI;
  // Database Name
  const dbName = 'chat-bot';

console.log('Hello Word');

app.listen(port, () => {
  console.log("Listening on port 3000...");
})

app.get("/hello", (req, res) => {
  res.send("Hello World\n");
})

app.get("/message/all", async (req, res) => {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("Connected correctly to server");
  
      const db = client.db(dbName);
  
      const col = db.collection('message');
      const docs = await col.find().toArray();
      console.log(docs);
      res.send(docs)
      
    } catch (err) {
      console.log(err.stack);
    }
  
    client.close();
  })

  app.delete("/messages/last", async (req, res) => {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("Connected correctly to server");
  
      const db = client.db(dbName);
  
      const col = db.collection('message');
      const arr = await col.find().toArray();
      const tets = arr[arr.length-1]._id
      const docs = await col.deleteOne({_id: tets});
      console.log(docs);
      res.send(docs)
      
    } catch (err) {
      console.log(err.stack);
    }
  
    client.close();
  })

app.post('/chat', async (req, res) => {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    const col = db.collection('message');
  
  switch(req.body.msg) {
    case "ville":
    const ville = await col.insertMany([{
      from: 'user',
      msg: req.body.msg
    },
    {
      from: 'bot',
      msg: 'Nous sommes à Paris'
    }]);
      res.send("Nous sommes à Paris\n");
      break;
    case "météo":
    const meteo = await col.insertMany([{
      from: 'user',
      msg: req.body.msg
    },
    {
      from: 'bot',
      msg: 'Il fait beau'
    }]);
      res.send("Il fait beau\n");
      break;
    case "demain":
      let rawdata = fs.readFileSync('response.json');
      let json = JSON.parse(rawdata);
      console.log(json.day);
      if(json.day == null) {
        res.send("Je ne connais pas demain…\n");
      }
      else {
        const demain = await col.insertMany([{
          from: 'user',
          msg: req.body.msg
        },
        {
          from: 'bot',
          msg: json.day
        }]);
        res.send(json.day);
      }

      break;
    case "demain = Mercredi":
      let day = {
          day: 'Mercredi',
      };
      let data = JSON.stringify(day);
      fs.writeFileSync('response.json', data);
      res.send("Mercredi");
      break;
    default:
      res.send("Réponse par défaut\n");
      break;
  }
} catch (err) {
  console.log(err.stack);
  res.send("error")
}
  client.close();
});


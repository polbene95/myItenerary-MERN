const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express();
const bodyParser= require('body-parser');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
MongoClient.connect('mongodb://polbene:pol123@ds119374.mlab.com:19374/my_itinerary', (err, db) =>{

    var dbase = db.db("my_itinerary");
    if (err) return console.log(err)
    app.listen(8080, () => {
      console.log('app working on 8080')
    })

    router.get('/city', (req, res) => {
        dbase.collection('city').find().toArray( (err, results) => {
          res.send(results)
        });
    });

    router.get('/city/:city', (req, res) => {
      let city = req.params.city
      dbase.collection('city').find().toArray( (err, results) => {
        let array = results.filter(el => el.id == city)
        res.send(array)
      });
    })

    router.get('/itinerary/:city', (req, res) => {
      let city = req.params.city;
      dbase.collection('itinerary').find().toArray( (err, results) => {
        let array = results.filter(itinerary => itinerary.ref && itinerary.ref.includes(city))
        res.send(array)
      });
    })

    router.get('/itinerary/:city/:id', (req, res) => {
      let city = req.params.city;
      let id = req.params.id;
      dbase.collection('itinerary').find().toArray( (err, results) => {
        let array = results.filter(itinerary => itinerary.ref.includes(city) && itinerary["_id"] == id)
        res.send(array)
      });
    });

    router.get('/posts/:id', (req, res) => {
      let id = req.params.id;
      dbase.collection('posts').find().toArray((err, results) => {
        let array = results.filter(post => post.itineraryId == id)
        res.send(array)
      })
    });

    router.post('/posts/:id', (req, res) => {
      let id = req.params.id;
      console.log(id)
      console.log(req.body)
      let post = {
        "itineraryId": id,
        "body": req.body.post,
        "author": {}
      }
      dbase.collection('posts').save(post, (err, result) => {
        if(err)
        console.log(error)
        res.send(result)
      })
    });
   

    app.use('/api',router)

})


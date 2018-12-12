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



    router.get('/itinerary/:city', (req, res) => {
      let city = req.params.city
      dbase.collection('itinerary').find().toArray( (err, results) => {
        console.log(results)
        let array = results.filter(itinerary => itinerary.ref.includes(city))
        res.send(array)
          
      });
})

app.use('/api',router)

})


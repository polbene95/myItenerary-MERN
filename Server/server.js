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
      console.log('app working on 3000')
    })

    router.get('/city', (req, res) => {
        dbase.collection('city').find().toArray( (err, results) => {
          res.send(results)
        });
    });

app.use('/api',router)

})


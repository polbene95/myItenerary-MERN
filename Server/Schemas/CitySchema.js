const mongoose = require('mongoose');
let Schema = mongoose.Schema();

mongoose.connect('mongodb://polbene:pol123@ds119374.mlab.com:19374/my_itinerary');

let citySchema = new Schema({
    name: name,
    country: country,
    src: {
        basic: basic,
        landscape: landscape
    }
});


module.exports = citySchema;
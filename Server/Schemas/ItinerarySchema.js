const mongoose = require('mongoose');
let Schema = mongoose.Schema();

mongoose.connect('mongodb://polbene:pol123@ds119374.mlab.com:19374/my_itinerary');

let itinerarySchema = new Schema({
    city: city,
    author: author,
    hashtags: hashtags,
    details: {
        title: title,
        time: time,
        likes: likes,
        price: price,
        activities: activities,
        comments: comments
    }
    
});


module.exports = itinerarySchema;
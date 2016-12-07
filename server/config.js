// purpose: create favorites model with mongoose

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/newsly');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongodb connection error'));
db.once('open', function() {
  console.log('connected to mongodb');

});



var newslySchema = mongoose.Schema({
  article: Object
});

var Favorite = mongoose.model('Favorite', newslySchema);

module.exports = Favorite;

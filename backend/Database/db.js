const mongoose = require('mongoose');
const URI = 'mongodb+srv://Vikas:29je2004db@cluster0.chf0xgr.mongodb.net/resetusers';
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('connected to database successfully'))
    .catch(err => console.log(`error occured while connecting to database, ${err}`));

module.exports = mongoose;
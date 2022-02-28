const mongoose = require('mongoose')
const mongodb = 'mongodb://localhost:27017/secureapi'
mongoose.connect(mongodb, {
    useNewUrlParser: true,

    useUnifiedTopology: true
})

mongoose.Promise = global.Promise
module.exports = mongoose
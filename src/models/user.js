const mongoose = require('mongoose')
const schema = mongoose.Schema

let userSchema = new schema({
    name : String,
    phone : Number,
    paymentMode : ["Gpay","Paytm","Cash"],
    savedLoc : String,
    rating : Number
})

module.exports = mongoose.model('user', userSchema)
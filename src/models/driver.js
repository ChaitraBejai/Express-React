const mongoose = require('mongoose')
const schema = mongoose.Schema

const driverSchema = new schema({
    name : String,
    phone : Number,
    paymentModeAccepted : ["Gpay","Paytm","Cash"],
    cars : ["Uber Go","Uber XL","Uber Premium"]
})

module.exports = mongoose.model('driver', driverSchema)
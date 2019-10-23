const express = require('express')
const user = require('../models/user')
const driver = require('../models/driver')
const router = express.Router()


router.post('/users', async (req, res, next) => {
    const users = new user({
        name : req.body.name,
        phone : req.body.phone,
        paymentMode : req.body.paymentMode,
        savedLoc : req.body.savedLoc,
        rating : req.body.rating
    })
    users.save().then(() => console.log("Saved."))
})

router.post('/drivers', async (req, res, next) => {
    const drivers = new driver({
        name : req.body.name,
        phone : req.body.phone,
        paymentModeAccepted : req.body.paymentModeAccepted,
        cars : req.body.cars
    })
    drivers.save().then(() => console.log('Saved Driver'))
})

router.get('/getUsers', async (req, res, next) => {
    driver.find().then((result) => res.send(result))
})

router.post('/updateUser:id', async (req, res, next) => {
    driver.update({_id : req.params.id},req.body)
    .then((result) => console.log(result))
})

module.exports = router
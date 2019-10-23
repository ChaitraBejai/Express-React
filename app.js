const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(cors())

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
.then(() => console.log("Connected to Test"))
.catch((err) => console.log(err))

 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use('/',routes)

app.use('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})
app.listen(3000, () => console.log(`Example app listening on port 3000!`))

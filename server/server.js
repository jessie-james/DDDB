const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3334

app.use('/', express.json())
app.use('/box', require('./routes/boxRoutes'))

mongoose.connect('mongodb://localhost:27017/dddb-app', { useNewUrlParser: true })
    .then(() => {
        console.log('mongoose is connected')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`)
})
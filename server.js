const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3010, function() {
    console.log('listening on 3010')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/test', (req, res) => {
    console.log(req.body)
  })

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

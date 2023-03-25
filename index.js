const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Changing some text')
})

app.listen(3000)
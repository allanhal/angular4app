const express = require('express')
const http = require('http')
const path = require('path')
const compression = require('compression')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(compression())

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || '3001'
app.set('port', port)

app.listen(port);
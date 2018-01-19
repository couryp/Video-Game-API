const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')

const linksys = require('./src/router')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/heroes', linksys)


app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error : { message : 'Not Found. Zug Zug'}})
})


app.listen(PORT, () => {
  console.log(`It's going down on PORT:${PORT}.`)
})

module.exports = app

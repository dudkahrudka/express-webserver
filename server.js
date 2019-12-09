const express = require('express')
const mainRoutes = require('./router')

const port = 80
const app = express()

app.use(express.static('public'))
app.set('view engine','pug')
app.use('/', mainRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
const express = require('express')
const app = express()
const port = parseInt(process.env.PORT) || 3030

// set the proxy
app.set('trust proxy', true)

// set static storage
app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

// use res.render to load up an ejs view file

// portofolio page
app.get('/', function(req, res) {
  res.render('portofolio')
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
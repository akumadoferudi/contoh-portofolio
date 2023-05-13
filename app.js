const express = require('express')
const app = express()
const port = 3030

// set static storage
app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

// use res.render to load up an ejs view file

// portofolio page
app.get('/', function(req, res) {
  res.render('portofolio')
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
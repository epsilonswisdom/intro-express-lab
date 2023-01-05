import * as animeBigthree from './animeBigthree.js'



// import modules

import express from 'express'

import { shonenJump } from './data/shonenJump.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res){
  res.redirect('home')
})

app.get('/shonenJump', function(req, res) {
  res.render('/shonenJump/index', {
    shonenJump: shonenJump
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
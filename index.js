const express = require('express')
const knex = require('knex')
const db = require('./db/db.js')
const bodyparser = require('body-parser')
const router = require('./routers/users.routes.js')

const port = 5000
const app = express()
const secretKey = 'secretkey'

  
app.use(express.json())
app.use(router)



app.listen(port,()=>{
    console.log('app is listening on port',port)
})
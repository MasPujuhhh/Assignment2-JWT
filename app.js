const express = require('express')
const routes = require('./routes/router')

const PORT = 8080
const app = express()






app.use(express.json())

app.use(routes)

app.listen(PORT, ()=>{
    console.log('Sever running in', PORT)
})
const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes/user')
dotenv.config()


PORT = process.env.PORT || 8080

app.use(cors())

// seteamos la carpeta public para archivos estaticos.
app.use(express.static('public'))
app.use(express.json())

// middelware
app.use('/', router)



app.listen(PORT,()=> {
    console.log('Escuchando en el puerto',PORT)
})
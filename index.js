const express = require('express')
const mongoose = require('mongoose')
const app = express()
const carRoutes = require('./routes/carRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/ws-cars')
let db = mongoose.connection

app.get('/', (req, res) => {
    res.send('Você está no end point principal da api')
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(carRoutes)

db.on('error', () => {console.log('Houve um erro ao conectar com o db')})
db.once('open', () => {
    console.log('Banco de dados conectado com sucesso')

    app.listen(process.env.PORT || 2000, () => {
        console.log(`Servidor rodando na porta: ${process.env.PORT || 2000}`)
    })
})
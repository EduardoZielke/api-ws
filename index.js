const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const carRoutes = require('./routes/carRoutes')
const PORT = process.env.PORT || 2000

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/ws-cars')
let db = mongoose.connection

const corsOptions = {
    origin: 'https://ws-front-end.herokuapp.com/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Você está no end point principal da api')
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(carRoutes)

db.on('error', () => {console.log('Houve um erro ao conectar com o db')})
db.once('open', () => {
    console.log('Banco de dados conectado com sucesso')

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`)
    })
})
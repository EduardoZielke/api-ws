const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')

router.get('/marcas', carController.listarMarcas)
router.get('/carros', carController.listarCarros)
router.post('/carros', carController.adicionarCarro)
router.post('/marcas', carController.adicionarMarca)

module.exports = router
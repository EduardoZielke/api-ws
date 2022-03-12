const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const brandController = require('../controllers/brandController')

router.get('/marcas', brandController.listarMarcas)
router.get('/carros', carController.listarCarros)
router.post('/carros', carController.adicionarCarro)
router.post('/marcas', brandController.adicionarMarca)

module.exports = router
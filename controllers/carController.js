const Cars = require('../models/car')
const Brands = require('../models/brand')

const listarCarros = async (req, res) => {

    try {
        const carros = await Cars.find()
        res.send(carros)
    } catch (error) {
        res.send({message: error})
    }
}

const adicionarCarro = async (req, res) => {
    console.log(req.body.nome_modelo)
    const nome_modelo = req.body.nome_modelo.toUpperCase()
    const combustivel = req.body.combustivel.toUpperCase()
    const cor = req.body.cor.toUpperCase()

    const {
        marca_nome,
        ano, 
        num_portas, 
        valor_fipe 
    } = req.body

    const {marca_id} = await Brands.findOne({marca_nome})
    const carroExiste = await Cars.findOne({nome_modelo})

    if(!carroExiste) {
        try {

            let newCar = Cars({
                id: await handleId(),
                marca_id,
                marca_nome,
                nome_modelo,
                ano,
                combustivel,
                num_portas,
                valor_fipe,
                cor
            })
            newCar.save().then(() => {
                res.send({message:'Carro adicionado com sucesso!'})
            })
    
        } catch (error) {
            console.log(error);
            res.send({error: error})
        }
    } else {
        res.send({message:'Carro já registrado no sistema!'})
    }

    async function handleId() {
        let cars = await Cars.find()
        if(cars.length === 0) {
            return 1
        }
        return cars.length + 1
    }
}

module.exports = {listarCarros, adicionarCarro}


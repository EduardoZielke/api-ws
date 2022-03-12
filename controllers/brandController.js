const Brands = require('../models/brand')

const listarMarcas = async (req, res) => {
    
    try {
        const marcas = await Brands.find()
        res.send(marcas)
    } catch (error) {
        res.send({message: error})
    }
}

const adicionarMarca = async (req, res) => {
    const marca_nome = req.body.marca_nome.toUpperCase()
    const marcaExiste = await Brands.findOne({marca_nome})

    if(!marcaExiste) {
        try {
            let newBrand = await new Brands({
                marca_nome,
                marca_id: await handleId()
            })
            newBrand.save().then(()=>{
                res.send({message:'Marca adicionada com sucesso!'})
            })
        } catch (error) {
            console.error('Ocorreu um erro ao adicionar a marca', error)
            res.json({message: error})
        }

    } else {
        res.json({message:'Marca já está cadastrada no sistema!'})
    }

    async function handleId() {
        let brands = await Brands.find()
        if(brands.length === 0) {
            return 1
        }
        return brands.length + 1
    }

}

module.exports = {listarMarcas, adicionarMarca}
//export default variable
const data = require('../data.json')

module.exports = {
    getAllPokemon: (req, res) => {
        const {type} = req.query
        let pokemon = data

        if(type) {
            pokemon = pokemon.filter(e => e.type === type)
        }

        if(!pokemon || pokemon.length === 0) {
            res.sendStatus(404)
        } else {
            res.status(200).send(pokemon)
        }
    },
    getPokemon: (req, res) => {
        const {id} = req.params

        let pokemon = data.find(e => e.id === +id)

        if(pokemon) {
            res.status(200).send(pokemon)
        } else {
            res.sendStatus(404)
        }   
    }
}
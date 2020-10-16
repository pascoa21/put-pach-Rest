const { request, response } = require('../app')
const games = require('../models/games.json')

const atualizar = (request, response) =>{
    const gamesAtualizados = request.body
    const id = request.params.id

    const gamesIds = games.map(game => game.id)

    const atualizaId = gamesIds.indexOf(id)

    const gamesAtualizadascomId = {id, ...gamesAtualizados}
    games.splice(atualizaId, 1, gamesAtualizadascomId)

    response.status(200).send(games.find(games => games.id === id))
}

module.exports = {
    atualizar
}
const { request, response } = require('../app')
const games = require('../models/games.json')

const atualizar = (request, response) =>{
    const gamesAtualizados = request.body
    const id = parseInt(request.params.id)

    const gamesIds = games.map(game => game.id)

    const atualizaId = gamesIds.indexOf(id)

    const gamesAtualizadascomId = {id, ...gamesAtualizados}
    games.splice(atualizaId, 1, gamesAtualizadascomId)

    response.status(200).send(games.find(games => games.id === id))
}

const update = (request, response) => {
    const gamesUpdate = request.body
    const id = parseInt(request.params.id)

    const gamesAtualizar = games.find(game => game.id === id)

    Object.keys(gamesUpdate).forEach((key)=>{
        gamesAtualizar [key] = gamesUpdate[key]
    })

    response.status(200).send(games)
}

module.exports = {
    atualizar,
    update
}
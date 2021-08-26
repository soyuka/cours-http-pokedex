const express = require('express')
const pokedex = require('./pokedex.json')

const app = express()
const port = 3000
 
app.use(express.static('public'))

// /pokedex/1
app.get('/pokedex/:id', function (req, res) {
  const pokemonTrouve = pokedex.pokemon.find(function predicate(pokemon) {
    return pokemon.id === parseInt(req.params.id)
  })

  if (pokemonTrouve) {
    return res.json(pokemonTrouve)
  }

  res.status(404).send('Not found.')
})

app.get('/pokedex', function (req, res) {
  // res.json(Object.keys(emojis).map(k => emojis[k]))
  res.json(pokedex.pokemon)
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

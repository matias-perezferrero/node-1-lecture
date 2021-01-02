// import express from 'express'
const express = require('express')
const pokemonCtrl = require('./pokemonController')

const app = express()

app.use(express.json())

// axios.get('/').then(res => {
//     console.log('success')
// }).catch(err => {
//     console.log('error')
// })

//axios.post('/pokemon/123?level=56', {name: pikachu})

// app.get('/', pokemonCtrl.homePage)

// app.get('/pokemon/:id', pokemonCtrl.getPokemon)

app.get('/pokemons', pokemonCtrl.getAllPokemon)

app.get('/pokemons/:id', pokemonCtrl.getPokemon)

app.listen(4420, () => {
    console.log('Server is listening on 4420')
})
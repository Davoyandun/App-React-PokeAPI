const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { Type, Pokemon } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getPokes = async () => {
  const req1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const req2 = await axios.get(req1.data.next);
  const allPokes = req1.data.results.concat(req2.data.results);
  const pokemon = []
  for (let i = 0; i < allPokes.length; i++) {
    let name = await allPokes[i].name;
    let info = await axios.get(allPokes[i].url)
   pokemon.push({name,info}) 
  }
return{
  pokemon
}
};
getPokes().then((e) => console.log(e));

module.exports = router;

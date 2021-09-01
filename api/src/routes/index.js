const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { Type, Pokemon } = require("../db");
const Get_Pokemon = require ('./Get_pokemon')
const router = Router();

// Configurar los routers
 router.use('/', Get_Pokemon);


router.get("/pokemons/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      let allinfo = await allPokes();
      let detail = allinfo.filter((e) => {
        if (id == e.id) {
          return e;
        }
      });
      res.status(200).send(detail);
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/pokemon", async (req, res) => {
  const {
    name,
    img,
    type,
    id,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  } = req.body;
  let newPokemon = await Pokemon.create({
    name,
    img,
    id,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    id: uuidv4(),
  });
  let typeDB = await Type.findAll({
    where: {
      type: type,
    },
  });
   await newPokemon.addType(typeDB); 
  const response =  await Pokemon.findAll({
  include: Type
  })
  res.status(200).send(response);
});

module.exports = router;

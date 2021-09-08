const axios = require("axios");
const { Type, Pokemon } = require("../db");
const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require("uuid");

const getPokes = async () => {
  const pokemons = [];
  for (let i = 1; i <= 40; i++) {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokemons.push({
      name: pokemon.data.name,
      img: pokemon.data.sprites.other.dream_world.front_default,
      type: pokemon.data.types.map((e) => e.type.name),
      id: pokemon.data.id,
      vida: pokemon.data.stats[0].base_stat,
      fuerza: pokemon.data.stats[1].base_stat,
      defensa: pokemon.data.stats[2].base_stat,
      velocidad: pokemon.data.stats[5].base_stat,
      altura: pokemon.data.height,
      peso: pokemon.data.weight,
    });
  }
  return pokemons;
};

let pokeDB = async () => {
  try {
    let BD = await Pokemon.findAll({
      include: Type
      });
let created = []
    for (let i = 0; i < BD.length; i++) {
      created.push({
         name : BD[i].name,
    img : 'https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg',
    type:BD[i].types.map(e => e.type),
    id: BD[i].id,
    vida:BD[i].vida,
    fuerza:BD[i].fuerza,
    ataque:BD[i].ataque,
    defensa:BD[i].defensa,
    velocidad:BD[i].velocidad,  
    altura:BD[i].altura,
    peso:BD[i].peso,
      })
 
      
    }
    return created;
  } catch (e) {
    console.log('hola',e);
  }
};
pokeDB().then(e=>console.log('este es ', e))
const allPokes = async () => {
  try {
    let Api = await getPokes();
    let DB = await pokeDB();
    let all = DB.concat(Api);
    return all;
  } catch (e) {
    console.log(e);
  }
};

// aqui iniciia el ruteo del backend */
/*
  ♙♙♙♙♙♙♙♙
  ♖♘♗♔♕♗♘♖
  */
router.get("/pokemons", async (req, res) => {
  let name = req.query.name;
  try {
    if (name) {
      name = name.toLowerCase();

      //  si name existe en la DB lo recibo y lo envio con un status 200  y send()
      // caso contrario hago todo lo q esta aca abajo

      let info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let detail = {
        name: info.data.name,
        img: info.data.sprites.other.dream_world.front_default,
        type: info.data.types.map((e) => e.type.name),
        id: info.data.id,
      };
      console.log(detail, "no anda");
      if (!detail) {
        res.status(200).send("no encontrado");
      } else {
        res.status(200).send(detail);
      }
    } else {
      let allinfo = await allPokes();
      let infoIndex = allinfo.map((e) => {
        return {
          name: e.name,
          img: e.img,
          id: e.id,
          fuerza:e.fuerza,
          type: e.type,
        };
      });
      res.status(200).send(infoIndex);
    }
  } catch (e) {
    console.log(e);
  }
});

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

router.post("/pokemons", async (req, res) => {
  const {
    name,
    img,
    type,
    id,
    vida,
    fuerza,
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
    fuerza,
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

router.get('/types', async (req, res)=>{
  let info = await  axios.get('https://pokeapi.co/api/v2/type')
  console.log(info.data.results)
   let types = info.data.results.map(e => e.name)

   for (let i = 0; i < types.length; i++) {
    Type.findOrCreate({
      where: {
        type: types[i],
      },
    });
  }
  const DBtypes = await Type.findAll();
   res.status(200).json(DBtypes)
})


module.exports =  router

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
  const pokemon = [];
  for (let i = 0; i < allPokes.length; i++) {
    let name = await allPokes[i].name;
    let info = await axios.get(allPokes[i].url);
    let img = await info.data.sprites.other.dream_world.front_default;
    let type = await info.data.types.map((e) => e.type.name);
    let id = await info.data.id;
    let vida = await info.data.stats[0].base_stat;
    let fuerza = await info.data.stats[1].base_stat;
    let defensa = await info.data.stats[2].base_stat;
    let velocidad = await info.data.stats[5].base_stat;
    let altura = await info.data.height;
    let peso = await info.data.weight;
    pokemon.push({
      name,
      img,
      type,
      id,
      vida,
      fuerza,
      defensa,
      velocidad,
      altura,
      peso,
    });
  }
  return pokemon;
};

let pokeDB = async () => {
  try {
    let BD = await Pokemon.findAll({
      includes: {
        model: Type,
        attributes: ["type"],
        through: {
          attibutes: [],
        },
      },
    });
    return BD;
  } catch (e) {
    console.log(e);
  }
};
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

allPokes().then((e) => console.log(e));

// aqui iniciia el ruteo del backend */
/*
♙♙♙♙♙♙♙♙
♖♘♗♔♕♗♘♖
*/
router.get("/pokemons", async (req, res) => {
  try {
    let allinfo = await allPokes();
    let infoIndex = allinfo.map((e) => {
      return {
        name: e.name,
        img: e.img,
        id: e.id,
        type: e.type,
      };
    });
    res.status(200).send(infoIndex);
  } catch (e) {
    console.log(e);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      let allinfo = await allPokes();
      console.log(allinfo);
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

module.exports = router;

const axios = require("axios");
const { Type, Pokemon } = require("../db");
const { Router } =require ("express");
const router= Router()

const getPokes = async () => {
    const req1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const req2 = await axios.get(req1.data.next);
    const allPokes = req1.data.results.concat(req2.data.results);
    const pokemon = [];
    for (let i = 0; i < allPokes.length; i++) {
      let name =  allPokes[i].name;
      let info = await axios.get(allPokes[i].url);
      let img =  info.data.sprites.other.dream_world.front_default;
      let type =  info.data.types.map((e) => e.type.name);
      let id =  info.data.id;
      let vida =  info.data.stats[0].base_stat;
      let fuerza =  info.data.stats[1].base_stat;
      let defensa =  info.data.stats[2].base_stat;
      let velocidad =  info.data.stats[5].base_stat;
      let altura =  info.data.height;
      let peso =  info.data.weight;
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
        let info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let detail = {
          name: info.data.name,
          img: info.data.sprites.other.dream_world.front_default,
          type: info.data.types.map((e) => e.type.name),
          id: info.data.id,
          vida: info.data.stats[0].base_stat,
          ataque: info.data.stats[0].base_stat,
          defensa: info.data.stats[2].base_stat,
          velocidad: info.data.stats[5].base_stat,
          altura: info.data.height,
          peso: info.data.weight,
        };
  
        if (!detail) {
          res.status(400).send("no encontrado");
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
            type: e.type,
          };
        });
        res.status(200).send(infoIndex);
      }
    } catch (e) {
      console.log(e);
    }
  });

  module.exports = router
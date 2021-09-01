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

module.exports = router;

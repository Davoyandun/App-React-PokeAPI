const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
 const {Type, Pokemon} = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

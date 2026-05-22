const express = require('express');

const router = express.Router();

const {
    obtenerPropiedades,
    crearPropiedad
} = require('../controllers/propertyController');

router.get('/', obtenerPropiedades);

router.post('/', crearPropiedad);

module.exports = router;
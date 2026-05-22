const db = require('../config/db');

const obtenerPropiedades = (req, res) => {

    const sql = 'SELECT * FROM propiedades';

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send('Error obteniendo propiedades');
        } else {
            res.json(result);
        }

    });

};

const crearPropiedad = (req, res) => {

    const { titulo, descripcion, precio, ciudad } = req.body;

    const sql = `
        INSERT INTO propiedades
        (titulo, descripcion, precio, ciudad)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [titulo, descripcion, precio, ciudad],
        (err, result) => {

            if (err) {
                console.log(err);
                res.status(500).send('Error creando propiedad');
            } else {

                res.json({
                    mensaje: 'Propiedad creada correctamente'
                });

            }

        }
    );

};

module.exports = {
    obtenerPropiedades,
    crearPropiedad
};
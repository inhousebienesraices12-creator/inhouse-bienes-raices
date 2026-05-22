require('./config/db');

const express = require('express');
const app = express();

app.use(express.json());

const propertyRoutes = require('./routes/propertyRoutes');

app.use('/api/propiedades', propertyRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
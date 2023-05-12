// Importamos las dependencias necesarias
const express = require('express'); // Importamos express, un framework de Node.js para crear aplicaciones web
const bodyParser = require('body-parser'); // Importamos body-parser, un middleware para manejar datos de formularios

//Conexion a base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_books', { useNewUrlParser: true });

// Importamos las rutas de nuestra aplicación
const routes = require('./routes');

// Creamos la aplicación de Express
const app = express();

// Configuramos el middleware de body-parser para manejar JSON y datos de formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Le pasamos la aplicación de Express a las rutas de nuestra aplicación
routes(app);

// Iniciamos el servidor en el puerto 3000 y mostramos un mensaje en la consola cuando el servidor esté iniciado
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

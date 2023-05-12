const express = require('express');
const router = express.Router(); // Creamos un nuevo objeto router para definir rutas
const bookController = require('./controllers/bookController'); // Importamos el controlador de books

// Definimos las rutas de la API RESTful para la entidad Book
router.get('/', bookController.getAll); // Ruta GET para obtener todos los libros
router.get('/:id', bookController.getById); // Ruta GET para obtener un libro por su ID
router.post('/', bookController.create); // Ruta POST para crear un nuevo libro
router.put('/:id', bookController.update); // Ruta PUT para actualizar un libro existente
router.delete('/:id', bookController.delete); // Ruta DELETE para eliminar un libro por su ID

module.exports = router; // Exportamos el objeto router para que pueda ser utilizado en otras partes de la aplicación

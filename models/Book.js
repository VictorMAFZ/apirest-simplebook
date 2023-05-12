// Importar librería mongoose
const mongoose = require('mongoose');

// Cree un nuevo esquema de mangosta para el modelo Libro
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
});

// Cree un nuevo modelo de mangosta utilizando el esquema de libro
const Book = mongoose.model('Book', BookSchema);

// Exporte el modelo del libro para usarlo en otros archivos
module.exports = Book;

const Book = require('../models/Book');

// Método para obtener todos los libros
exports.getAll = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Método para obtener un libro por su ID
exports.getById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// Método para crear un nuevo libro
exports.create = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
};

// Método para actualizar un libro existente
exports.update = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Establece que se devuelva el libro actualizado en la respuesta
  });
  res.json(book);
};

// Método para eliminar un libro por su ID
exports.delete = async (req, res) => {
  await Book.findByIdAndRemove(req.params.id);
  res.json({ message: 'Libro eliminado correctamente.' });
};

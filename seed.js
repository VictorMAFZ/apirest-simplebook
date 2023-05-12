const Book = require('./models/Book');

const books = [
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    year: 1967
  },
  {
    title: 'El amor en los tiempos del cólera',
    author: 'Gabriel García Márquez',
    year: 1985
  },
  {
    title: 'La ciudad y los perros',
    author: 'Mario Vargas Llosa',
    year: 1963
  }
];

async function seed() {
  await Book.deleteMany({}); // Eliminamos todos los libros existentes en la base de datos
  await Book.create(books); // Creamos los nuevos libros
  console.log('Libros creados correctamente');
}

seed();

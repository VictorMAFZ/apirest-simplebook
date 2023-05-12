// Importamos las rutas de libros
const bookRoutes = require('./bookRoutes');

// Exportamos una función que recibe como parámetro la aplicación de Express
module.exports = (app) => {
  // Registramos las rutas de libros en la aplicación de Express
  app.use('/books', bookRoutes);
};

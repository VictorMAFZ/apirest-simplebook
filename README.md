# apirest-simplebook
# La aplicación "book" es una aplicación web de Node.js que utiliza el framework Express para crear una API RESTful para administrar una colección de libros.
# La aplicación utiliza una base de datos MongoDB para almacenar y recuperar información sobre los libros. El modelo de datos de libro se define en el archivo models/Book.js y la lógica de negocio se maneja en el controlador de libros en controllers/bookController.js.
# La aplicación proporciona una serie de rutas para interactuar con los datos de libro, incluyendo:
# GET /books para obtener todos los libros
# GET /books/:id para obtener un libro por su ID
# POST /books para crear un nuevo libro
# PUT /books/:id para actualizar un libro existente
# DELETE /books/:id para eliminar un libro por su ID
# Estas rutas se definen en el archivo routes/bookRoutes.js y se registran en la aplicación en el archivo routes.js.

const argv = require('./config/yargs')
const { crearTabla } = require('./helpers/multiplicar');
console.clear();

crearTabla( argv.base, argv.listar, argv.tope )
  .then( nombreArchivo => console.log( `${nombreArchivo} creado` ))
  .catch( error => console.log(error));
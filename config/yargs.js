const argv =  require('yargs')
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: "Es la base de la tabla de multiplicar"
              })
              .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: "Lista la ejecución de la app"
              })
              .option('t', {
                alias: 'tope',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: "Tope de la tabla de multiplicar."
              })
              .check((argv, options) => {
                if ( isNaN(argv.b) || isNaN(argv.t) ) {
                  if ( isNaN(argv.b) ){
                    throw new Error("La base tiene que ser de tipo numerico.");
                  }else{
                    throw new Error("El tope tiene que ser de tipo numerico.");
                  }
                }else{
                  return true;
                }
              }).argv;

module.exports = argv;
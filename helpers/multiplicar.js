const fs = require('fs');
require('colors');

const crearTabla = ( base = 1, listar = false, tope = 10 ) => {

  return new Promise((resolve, reject) => {
    let salida = '';
    for (let i = 1; i <= tope; i++) {
      salida += ( `${base} x ${i} = ${i*base}\n` );
    }

    if( listar ){
      console.log( '======================='.green );
      console.log( `   Tabla del ${base}`.underline.red);
      console.log( '======================='.green );
      console.log( salida );
    }
    
    let nombreArchivo = `./salida/tabla-${base}.txt`;
    try {
      fs.writeFileSync( nombreArchivo, salida);
      resolve( nombreArchivo.rainbow ); 
    }catch(err){
      reject("error, el archivo no pudo ser creado", err)
    }
  })
  
}

module.exports = {
  crearTabla
}

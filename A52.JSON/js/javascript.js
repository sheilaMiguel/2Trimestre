
// Definir un objeto en JavaScript
const alumno = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 22,
  escuela: "CDMFP",
    direccion: {
      calle: "Calle 123",
      cpostal: "28015"
    }
};
  
  // Convertir el objeto a formato JSON
  const objetoJSON = JSON.stringify(alumno);
  console.log("Objeto en formato JSON:");
  console.log(objetoJSON);
  /*{ COMO TE DA
  "nombre": "Juan",
  "apellido": "Pérez",
  "edad": 22,
  "escuela": "CDMFP",
  "direccion": {
    "calle": "Calle 123",
    "cpostal": "28015"
  }
}*/

  //CONVERTIR A JSON SOLO ALGUNAS PROPIEDADES

const objetoConAlgunasPRopJSON = JSON.stringify(alumno, ["edad", "escuela"]);
console.log("\nConvertir solo algunas propiedades a formato JSON:");
// Mostrar el resultado
console.log(objetoConAlgunasPRopJSON);
/* LO QUE TE DEVUELVE 
{"edad":22,"escuela":"CDMFP"}*/

const otro = JSON.stringify(alumno, 3);
console.log("\nCTe pone una salgria el 3:");
console.log(otro);
/*{ si guardamos el objeto en un fichero de texto, se añadirán tres espacios de sangría
"nombre": "Alicia",
"edad": 25,
"direccion": {
      "calle": "Calle 123",
      "cpostal": “28015”
}
}*/


  // Convertir el JSON de nuevo a un objeto JavaScript
  const nuevoObjeto = JSON.parse(objetoJSON);
  console.log("\nObjeto JavaScript después de parsear el JSON:");
  console.log(nuevoObjeto);
  
  // Definir las propiedades deseadas que se deben incluir
// Convertir el JSON de nuevo a un objeto JavaScript y seleccionar propiedades específicas



//OBJETO EN FORMATO JSON
objetoConJson={"nombre":"Juan","apellido":"Pérez","edad":22,"escuela":"CDMFP"}



//RECORRER CON FOREACH O ALGO ASI

// Definir un objeto en JavaScript
const alumnos = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 22,
  escuela: "CDMFP",
  direccion: {
    calle: "Calle 123",
    cpostal: "28015"
  }
};

// Convertir el objeto a formato JSON
const obj = JSON.stringify(alumnos);

// Parsear el JSON y aplicar la función de reviver
const nobj = JSON.parse(obj, (clave, valor) => {
  console.log(clave + ":" + valor);

  // Si la clave es 'direccion', también aplicamos la función de reviver
  //reviver se encarga de imprimir en la consola las claves y valores tanto del objeto principal como del objeto anidado 'direccion'. 
  if (clave === 'direccion' && typeof valor === 'object') {
    return JSON.parse(JSON.stringify(valor), (subclave, subvalor) => {
      console.log('direccion: ' + subvalor);
      return subvalor;
    });
  }

  return valor;
});






// CONSTRUCTOR


// CREO EL OBJETO
let producto2 = {
  nombre: "Zapato hombre",
  descripcion: "to guapas",
  talla: { talla1: 36, talla2: 37, talla3: 38 }, // Corregido el objeto 'talla'
  precio: 35, // Corregido el objeto 'precio'
  color: "blanco"
};


//ACCEDO TANTO A LA CLAVE COMO AL VALOR

// Utilizar Object.entries para obtener un array de pares clave-
console.log("ACCEDO POR VALUES Y CLAVE");
let entradas = Object.entries(producto2);


// Recorrer el array de pares clave-valor e imprimirlos con un bucle forEach
entradas.forEach(([clave, valor]) => {
  // Verificar si el valor es un objeto
  if (typeof valor === 'object') {
    // Si es un objeto, realizar un bucle para las propiedades internas
    console.log(clave + ": ");
    Object.entries(valor).forEach(([subclave, subvalor]) => {
      console.log(`  ${subclave}: ${subvalor}`);
    });
  } else {
    console.log(clave + ": " + valor);
  }
});

window.onload=function(){


//EN PARRAFOS
// Recorrer el array de pares clave-valor e imprimirlos con un bucle forEach
entradas.forEach(([clave, valor]) => {
  // Verificar si el valor es un objeto
  if (typeof valor === 'object') {
    // Si es un objeto, realizar un bucle para las propiedades internas
    resultado.innerHTML += `<strong>${clave}:</strong><br>`;
    Object.entries(valor).forEach(([subclave, subvalor]) => {
      resultado.innerHTML += `  ${subclave}: ${subvalor}<br>`;
    });
  } else {
    resultado.innerHTML  += `<strong>${clave}</strong>: ${valor}<br>`;
  }
});





let producto3 = {
  nombre: "Zapato hombre",
  descripcion: "to guapas",
  talla: [36, 37, 38], // Utilizando un array para las tallas
  precio: 35,
  color: "blanco"
};

let entradas3 = Object.entries(producto3);
//EN PARRAFOS
// Recorrer el array de pares clave-valor e imprimirlos con un bucle forEach

entradas3.forEach(([clave, valor]) => {
  // Verificar si el valor es un objeto
  if (typeof valor === 'object') {
    // Si es un objeto, realizar un bucle para las propiedades internas
    resultado3.innerHTML += `<strong>${clave}:</strong><br>`;
    Object.entries(valor).forEach(([subclave, subvalor]) => {
      resultado3.innerHTML += `   ${subvalor}<br>`;
    });
  } else {
    resultado3.innerHTML  += `<strong>${clave}</strong>: ${valor}<br>`;
  }
});
}
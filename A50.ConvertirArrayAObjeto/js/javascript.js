// Array de pares clave-valor
let arrayDePares = [
  ["clave1", "valor1"],
  ["clave2", "valor2"],
  ["clave3", "valor3"]
];
console.log(arrayDePares);
// Convertir el array de pares clave-valor a un objeto usando Object.fromEntries()
let objetoDesdeArray = Object.fromEntries(arrayDePares);

console.log(objetoDesdeArray);

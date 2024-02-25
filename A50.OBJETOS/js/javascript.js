

// Crear un objeto y propiedades
let miObjeto = { 
    nombre: "Juan", edad: 12 };

console.log(miObjeto); // Salida: Juan
// Acceder a propiedades usando la notación punto
console.log(miObjeto.nombre); // Salida: Juan
console.log(miObjeto["nombre"]); // Salida: 12

// Acceder a propiedades usando la notación corchete
console.log(miObjeto["edad"]); // Salida: 12

// Anidar propiedades
let alumno = { nombre: "Juan", apellidos: { primero: "Pérez", segundo: "García" } };

// Acceder a valores de segundo nivel
console.log(alumno.apellidos.segundo); // Salida: García
console.log(alumno["apellidos"]["segundo"]); // Salida: García

// Cambiar valores de propiedades
alumno.edad = 13;

// Añadir nueva propiedad
alumno.curso = "3A";

// Mostrar el objeto actualizado
console.log(alumno);

// Eliminar una propiedad
delete alumno.edad;

// Mostrar el objeto después de eliminar la propiedad 'edad'
console.log(alumno);



//PROPIEDADES + METODO
// Crear un objeto
let alumnoo = { 
    nombre: "Sheila", edad: 12,
    saludar: function() {
    
        return "Hola, " + this.nombre;
      }}; 

console.log(alumnoo.saludar()); // Salida: Juan

alert(`Yepa, ${alumnoo.saludar()}`)


//CONSTRUCTOR
function Pupilo(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.saludar=()=>alert(`hola, ${nombre}`)
    }

let pupilo1=new   Pupilo("Sheilaa","Miguel",24);
console.log(pupilo1);
alert(pupilo1.nombre);

pupilo1.saludar();

let pupilo2 = Object.create(Pupilo);

pupilo2.nombre="Mari";
pupilo2.apellido="Gadea";
pupilo2.edad=32;
alert("alumno nuevo: "+pupilo2.nombre);


Pupilo.prototype.escuela="CDMFP"; //los objetos ya ceados van a llevar esta propiedad
pupilo1.escuela="OTRA";
//pupilo2.escuela="";
console.log("MUESTRA ESCUELA?");
console.log(pupilo1);
console.log(pupilo2);
console.log(pupilo2.escuela);
console.log(pupilo1.escuela);


listarAlumnos= new Array();
listarAlumnos[0]=new Pupilo("pepe", "Perez", 35);
listarAlumnos[0].nombre;
console.log(listarAlumnos[0]);


//ACCEDO A LAS PROPIEDADES CON EL  


//FOR

// Generar un array con las claves del objeto usando Object.keys()
let claves = Object.keys(pupilo1);
// Recorrer el array de claves e imprimir los valores correspondientes
    console.log("con el for");
for (let i = 0; i < claves.length; i++) {
    let clave = claves[i]; 
    let valor = pupilo1[clave];

    console.log(pupilo1[clave]);
    console.log(clave + ": " + valor);
  }


  //FOR IN 

  console.log("con el for IN");
for (let propiedad in pupilo1) {
   
    console.log(propiedad + ": " + pupilo1[propiedad]);
  }


  //ACCEDO POR VALUES
  
// Utilizar Object.values para obtener un array de valores
let valores = Object.values(pupilo1);
console.log("ACCEDO POR VALUES");
// Recorrer el array de valores e imprimirlos
for (let i = 0; i < valores.length; i++) {
  console.log(valores[i]);
}



//ACCEDO TANTO A LA CLAVE COMO AL VALOR

// Utilizar Object.entries para obtener un array de pares clave-
console.log("ACCEDO POR VALUES Y CLAVE");
let entradas = Object.entries(pupilo1);

// Recorrer el array de pares clave-valor e imprimirlos con un bucle forEach
entradas.forEach(([clave, valor]) => {
  console.log(clave + ": " + valor);
});


//FOR OFFFFFFFFFFFFFF
console.log("FOR OFFFFFFFFFFFFFFF");
// Recorrer el array de pares (clave-valor) e imprimirlos con un bucle for...of
for (let [clave, valor] of Object.entries(pupilo1)) {
    console.log(clave + ": " + valor);
  }



/*crea producto -contructor y 
		zapatos con propiedades nombre descrip talla precio
		mostramos por pantalla
    con object keys*/



//CONSTRUCTOR
function Producto(nombre,descripcion,talla, precio, color){
  this.nombre=nombre;
  this.descripcion=descripcion;
  this.talla=talla;
  this.precio=precio;
  this.color=color;
  }

  //CREO EL OBJETO
  let zapatillas=new Producto("Airforce","Las mejores",36, 80, "rojas");
console.log(zapatillas);


window.onload=function(){
// Generar un array con las claves del objeto usando Object.keys()
let claves = Object.keys(zapatillas);
detalle.innerHTML+="<p>"
// Recorrer el array de claves e imprimir los valores correspondientes
    console.log(" clave valor con el object keys");
for (let i = 0; i < claves.length; i++) {
    let clave = claves[i]; 
    let valor = zapatillas[clave];
    console.log(clave + ": " + valor);
    detalle.innerHTML+="<span>"+clave+"</span>";
  }
  detalle.innerHTML+="</p><p>";

  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i]; 
    let valor = zapatillas[clave];
   // console.log(clave + ": " + valor);
    detalle.innerHTML+="<span>"+valor+"</span>";
  }
  detalle.innerHTML+="</p>";



//ACCEDO TANTO A LA CLAVE COMO AL VALOR
// Utilizar Object.entries para obtener un array de pares clave-
console.log("ACCEDO POR VALUES Y CLAVE-object.entries");
let entradas = Object.entries(zapatillas);

// Recorrer el array de pares clave-valor e imprimirlos con un bucle forEach
entradas.forEach(([clave, valor]) => {
  console.log(clave + ": " + valor);

});

}


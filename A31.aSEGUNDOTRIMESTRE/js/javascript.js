//compruebo que este bien enlazado
//alert("Hola");

window.onload=function(){

//1.CREO ELEMENTO (create element)
//2.CREO EL NODO TEXTO (CREATE TEXT NODE)
//3. AÑADO EL TEXTO APPENDCHILL UNO DENTRO DE OTRO
//4. AÑADIROS AL DOCUMENTO APPENDCHILL AL BODY
let laNAV=document.createElement("nav");
let laUL=document.createElement("ul");

  // Array de ítems del menú
  let items = ["Inicio", "Productos", "Servicios", "Contacto"];
// Crear elementos de lista (<li>) y añadirlos al contenedor
items.forEach(function (items){ 
  // Crear un nuevo elemento de lista
  let lali = document.createElement("li");

  // Crear un enlace (<a>) dentro del elemento de lista
  let a = document.createElement("a");
  a.href = "#" + items.toLowerCase(); 
  a.textContent = items;   //crea:<a href="#productos">Productos</a>

document.body.appendChild(laNAV);
laNAV.appendChild(laUL); 
laUL.appendChild(lali);
lali.appendChild(a);  


})

}




  
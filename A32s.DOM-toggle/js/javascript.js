
/*
Crea una página HTML que contenga un título con un identificador único ("titulo"), un párrafo con una clase específica ("parrafo"), una lista desordenada con algunos elementos y un div con un identificador único ("miDiv"). Además, incluye un botón que al hacer clic realizará diversas acciones de manipulación del DOM mediante JavaScript.

1-Cambiar Texto por ID: Al hacer clic en el botón, el texto del título con el identificador "titulo" debe cambiar a "Nuevo Título".

2-Agregar/Quitar Clase por Clase: El párrafo con la clase "parrafo" debe alternar la clase "resaltado" al hacer clic en el botón.

3-Cambiar Color de Fondo por Etiqueta: Todos los elementos de la lista desordenada deben cambiar su color de fondo a "lightblue" al hacer clic en el botón.

4-Alternar Visibilidad por ID: El div con el identificador "miDiv" debe alternar su visibilidad al hacer clic en el botón.

5-Agregar/Quitar Elementos por Etiqueta: La lista desordenada con el identificador "miLista" debe agregar un nuevo elemento con el texto "Nuevo Elemento" y, al mismo tiempo, quitar el último elemento existente al hacer clic en el botón.
*/

window.onload=function(){
      document.querySelector("h4").onclick=function(){
      titulo.innerHTML="Nuevo Título";
      document.querySelector("p").classList.toggle("resaltado"); //si la tiene la quita, si no la tiene la pone
      
      
      let listaItems = document.getElementsByTagName("li"); //coge todos los lis que haya 
      console.log(listaItems.length);
      for (let i = 0; i < listaItems.length; i++) {
      listaItems[i].style.backgroundColor = "lightblue";
      }

      document.querySelector("div").classList.toggle("adiosVisibilidad");

      let nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = "Nuevo Elemento";
      document.getElementById("miLista").appendChild(nuevoElemento);

      var elementos =  document.getElementById("miLista").getElementsByTagName("li");
      if (elementos.length > 0) {
         miLista.removeChild(elementos[elementos.length - 2]);


      }
}}
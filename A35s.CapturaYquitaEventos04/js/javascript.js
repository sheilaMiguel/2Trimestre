//compruebo que este bien enlazado

 // Usando window.addEventListener para el evento 'load'
 window.addEventListener("click", quitar);
 
 function quitar(){
  let b=1;
  otraFuncion(b);
  alert("Se ha cargado la página"); 
  window.removeEventListener("click", quitar);
}

function otraFuncion(b){
alert(b);
event.preventDefault();
}

  /* ASI TB FUNCIONA 

  function quitar(event){
  event.preventDefault()
  alert("Se ha cargado la página"); 
  window.removeEventListener("click", quitar);
}

  */

window.onload=function(){
formulario.onsubmit=function(){
  event.preventDefault();
  alert("no se ha enviado");
}
  

}


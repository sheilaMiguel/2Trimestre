

//lo q deberia hacer es salir el comportamiento por defecto de ambos, cnd das al parrafo inconscientemente das al div
//peor lo que queremos es EVITAR que ocurra esto. 

window.onload=function(){
document.querySelector("p").onclick=function(){
  alert("You clicked on the paragraph!"); 
   
}
// de normal, deberia saler HIJO (p) , PADRE (div)
/*
document.querySelector("div").onclick=function(){
  alert("You clicked on the div!");
{capture:true}
}*/


//al hacer capture, saldra primero el elemento del PADRE(div-contenedor), luego HIJO (p)

document.querySelector("div").addEventListener("click",(event)=>{
  alert("click en el contenedor");
    event.stopPropagation();}, //al poner stopPropagation, hace que salga SOLO el alert del div
  {capture:true}


  );

 


}
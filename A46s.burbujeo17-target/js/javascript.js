

//lo q deberia hacer es salir el comportamiento por defecto de ambos, cnd das al parrafo inconscientemente das al div
//peor lo que queremos es EVITAR que ocurra esto. 

window.onload=function(){
document.querySelector("div").onclick=function(e){
  alert("You clicked on the " + e.target.id); //target, dnd se produce el evenbto, dnd haces click
   

}
}
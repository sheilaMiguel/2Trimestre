

//lo q deberia hacer es salir el comportamiento por defecto de ambos, cnd das al parrafo inconscientemente das al div
//peor lo que queremos es EVITAR que ocurra esto. 

window.onload=function(){
document.querySelector("div").onclick=function(e){

  //target, dnd se produce el evenbto, dnd haces click
   //alert(e.target.id);

   if(e.target.id=="padre"){
    alert("elige producto");

   }else{
      otraCaja.innerHTML+= e.target.innerHTML ;
      otraCaja.innerHTML+="<br><br>"

   }
}

//el currenttarget es SOBRE EL Q HACES CLICK; EL Divvvvvvvvvv
document.querySelector("div").addEventListener("click", function (event) {
   alert("Aunque el evento se captura en el padre (currentTarget) '" + event.currentTarget.id + "', el evento real se ha producido sobre el hijo (target)'" + event.target.id + "'");
});

}
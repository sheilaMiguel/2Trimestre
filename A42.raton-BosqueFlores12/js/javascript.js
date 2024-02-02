// 🌻🎋
//capturar evento-coordenadas, crear elemento y posicionarlo
window.onload=function(){
  //solo capturo el click sobre el PRADO
  document.getElementById("verde").onclick=function(event){

  //donde pinchas con el boton dere
  posx=event.offsetX-10; //punto de la ventana del navegador (chrome arriba izq)
  posy=event.offsetY-15; //coord dnd se produce el evento

  document.getElementById("cosas").style.top=posy+"px";
  document.getElementById("cosas").style.left=posx+"px";

  document.getElementById("cosas").innerHTML=getRandomEmoji(); //devuelve el objeto sobre el q se ha realizado
}

  document.getElementById("prado").onclick=function(event){
    pposx=event.offsetX-10; 
    pposy=event.offsetY-15;

    flor=document.createElement("span");
    (Math.random()*2>1)?flor.innerHTML="🌻":flor.innerHTML="🎋";


    flor.style.top=pposy+"px";
    flor.style.left=pposx+"px";

    document.getElementById("prado").appendChild(flor);

  }
}


function getRandomEmoji() {
  // Generar un número aleatorio entre 0 y 1
  let randomValue = Math.random();
  // Asignar emoji basado en el número aleatorio
  let emoji = (randomValue < 0.5) ? "🌻" : "🎋";
  // Devolver el emoji
  return emoji;
}
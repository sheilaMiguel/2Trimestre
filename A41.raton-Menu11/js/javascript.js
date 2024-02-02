
window.onload=function(){
window.oncontextmenu=function(event){

  event.preventDefault();

  //donde pinchas con el boton dere
  posx=event.clientX; //punto de la ventana del navegador (chrome arriba izq)
  posy=event.clientY; //coord dnd se produce el evento


  //para que cuando estes en los limites de la pagina, se vea bien
  posx>(window.innerWidth-200)?posx-=230:posx=posx; 
  posy>(window.innerHeight-200)?posy-=230:posy=posy;

  document.getElementById("menu").style.top=posy+"px";
  document.getElementById("menu").style.left=posx+"px";
  document.getElementById("menu").style.display="block";
  document.getElementById("menu").innerHTML="<p>Opcion 1</p><p>Opcion2</p><p>"+event.target.alt.toString().split('/').pop()+"</p><p>"+event.target.src.toString().split('/').pop()+"</p>"; //devuelve el objeto sobre el q se ha realizado

  //pop-> devuelve el ultimo


}
//cierra cuando haces clickkk
window.onclick=cerrar;
}


function cerrar(){
  document.getElementById("menu").style.display="none";
}
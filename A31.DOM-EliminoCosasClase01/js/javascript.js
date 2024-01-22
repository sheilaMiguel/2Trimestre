//compruebo que este bien enlazado



/* REPASITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

window.onload=function(){

   
document.querySelector("p").classList.add("clase3");
//con esto vemos las clases que tiene el p (3, las dos de html y la metida ahora, la ultima sobreescribe a la primera)
console.log(document.querySelector("p").classList);



}
*/


/*EJER 2, que al pulsar en el parrafo, te lo cambie*/
/* MI FORMA (es una mala practica)
function fondo(){
   document.querySelector("p").classList.add("clase3");
   //con esto vemos las clases que tiene el p (3, las dos de html y la metida ahora, la ultima sobreescribe a la primera)
   console.log(document.querySelector("p").classList);  
   texto.innerHTML="clases:  " + document.querySelector("p").classList;
}*/


window.onload=function(){
   document.querySelector("p").onclick=function(){
      document.querySelector("p").classList.add("clase3");
       document.querySelector("p").classList.toggle("clase4"); //si la tiene la quita, si no la tiene la pone
      document.querySelector("p").classList.remove("clase2"); //cnd pinche en p que no salga clase 2
   }
   document.querySelector("div").onclick=function(){
      clases= document.querySelector("p").classList;
      document.querySelector("div").innerHTML="Clases:"+clases;

   }
}
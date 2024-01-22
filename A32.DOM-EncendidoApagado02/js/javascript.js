//compruebo que este bien enlazado




window.onload=function(){
      document.querySelector("p").onclick=function(){
      document.body.classList.toggle("oscuro"); //si la tiene la quita, si no la tiene la pone
      document.querySelector("p").classList.toggle("oscuro"); //si la tiene la quita, si no la tiene la pone
      
     //console.log(document.querySelector("body").classList);
 

if(document.body.classList=="claro oscuro"){
   document.querySelector("p").innerHTML="⬜ OFF ";
}else{
   document.querySelector("p").innerHTML="ON ⬛";
}

   }
}
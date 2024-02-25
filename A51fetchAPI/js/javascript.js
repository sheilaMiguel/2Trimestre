
 url="https://randomuser.me/api/";

 fetch(url) 

 .then(exito) //si esta bien 
 .catch(miFuncionError) //si hay fallo
 .finally(siempre) //acaba 

 function exito(respuesta){
    respuesta.json().then(guardar);
 }



 function guardar(texto){
  //miObjeto=JSON.parse(texto)
  detalles.innerHTML="<h1>"+ texto.results[0].name.first+ " "+texto.results[0].name.last+"</h1>";
  detalles.innerHTML+="<img src='"+ texto.results[0].picture.large+"' alt=''>";
  detalles.innerHTML+="<p>Ciudad: "+ texto.results[0].location.city+ "</p>";
  detalles.innerHTML+="<p>Pais: "+ texto.results[0].location.country+ "</p>";
  detalles.innerHTML+="<p>Email: <a href='mailto:"+ texto.results[0].email +"</a></p>";
  detalles.innerHTML+="<p>Telefono: "+ texto.results[0].phone +"</p>";


 } 

 function siempre(){
  console.log("se acabo el programa");
 
 }

 function miFuncionError(error){
   console.log(error.message);//muestra el mensaje del error
 }

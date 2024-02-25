
 url="https://randomuser.me/api/";

 fetch(url) 

 .then(exito) //si esta bien 
 .catch(miFuncionError) //si hay fallo
 .finally(siempre) //acaba 

 function exito(respuesta){
    alert("hola mundo");
    alert(respuesta.status) //te da el codigo de respuesta
    alert(respuesta.ok)
    respuesta.text().then(guardar) //la respuesta del texto, para ver quien quiero qu gestione el texto de respuesta
 }

 function miFuncionError(error){
  alert("fallo");
  alert(error.message);//muestra el mensaje del error
 }


 function guardar(texto){
  miObjeto=JSON.parse(texto)
  detalles.innerHTML=miObjeto.results[0].name.first;
 
 } 

 function siempre(){
  alert("se cabo el programa");
 
 }

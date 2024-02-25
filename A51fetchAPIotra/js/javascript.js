
 url="https://randomuser.me/api/";

 async function inicio(){

  const respuesta=await fetch (url);
  const datos = await respuesta.json();

  alert(datos.response[0].gender)
 }